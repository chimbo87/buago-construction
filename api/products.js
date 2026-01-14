import { Pool } from 'pg';
import { del } from '@vercel/blob';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default async function handler(req, res) {
  // CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  // GET all products with their images
  if (req.method === 'GET' && !req.query.id) {
    try {
      const productsQuery = `
        SELECT p.*, 
               COALESCE(
                 json_agg(
                   json_build_object(
                     'id', pi.id,
                     'url', pi.image_url,
                     'order', pi.image_order,
                     'is_primary', pi.is_primary
                   ) ORDER BY pi.image_order
                 ) FILTER (WHERE pi.id IS NOT NULL), 
                 '[]'::json
               ) as images
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        GROUP BY p.id
        ORDER BY p.created_at DESC
      `;
      
      const result = await pool.query(productsQuery);
      res.status(200).json(result.rows);
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Failed to fetch products' });
    }
    return;
  }

  // GET single product by ID with images
  if (req.method === 'GET' && req.query.id) {
    try {
      const productQuery = `
        SELECT p.*, 
               COALESCE(
                 json_agg(
                   json_build_object(
                     'id', pi.id,
                     'url', pi.image_url,
                     'order', pi.image_order,
                     'is_primary', pi.is_primary
                   ) ORDER BY pi.image_order
                 ) FILTER (WHERE pi.id IS NOT NULL), 
                 '[]'::json
               ) as images
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        WHERE p.id = $1
        GROUP BY p.id
      `;
      
      const result = await pool.query(productQuery, [req.query.id]);
      
      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }
      
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Database error:', error);
      res.status(500).json({ error: 'Failed to fetch product' });
    }
    return;
  }

  // CREATE new product (POST)
  if (req.method === 'POST') {
    const client = await pool.connect();
    
    try {
      await client.query('BEGIN');
      
      const { 
        name, 
        description, 
        price, 
        discount_price, 
        rating, 
        category, 
        is_new, 
        is_hot,
        images // Array of image objects: [{ url: string, order?: number, is_primary?: boolean }]
      } = req.body;
      
      // Insert product
      const productResult = await client.query(
        'INSERT INTO products (name, description, price, discount_price, rating, category, is_new, is_hot) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *',
        [name, description, price, discount_price || null, rating || 0, category, is_new || false, is_hot || false]
      );
      
      const product = productResult.rows[0];
      
      // Insert images if provided
      if (images && images.length > 0) {
        for (let i = 0; i < images.length; i++) {
          const image = images[i];
          await client.query(
            'INSERT INTO product_images (product_id, image_url, image_order, is_primary) VALUES ($1, $2, $3, $4)',
            [
              product.id, 
              image.url, 
              image.order || (i + 1),
              image.is_primary || (i === 0) // First image is primary by default
            ]
          );
        }
      }
      
      await client.query('COMMIT');
      
      // Fetch the complete product with images
      const completeProductQuery = `
        SELECT p.*, 
               COALESCE(
                 json_agg(
                   json_build_object(
                     'id', pi.id,
                     'url', pi.image_url,
                     'order', pi.image_order,
                     'is_primary', pi.is_primary
                   ) ORDER BY pi.image_order
                 ) FILTER (WHERE pi.id IS NOT NULL), 
                 '[]'::json
               ) as images
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        WHERE p.id = $1
        GROUP BY p.id
      `;
      
      const finalResult = await pool.query(completeProductQuery, [product.id]);
      
      res.status(201).json(finalResult.rows[0]);
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Database error:', error);
      res.status(500).json({ error: 'Failed to create product', details: error.message });
    } finally {
      client.release();
    }
    return;
  }

  // UPDATE product (PUT)
  if (req.method === 'PUT') {
    const client = await pool.connect();
    
    try {
      await client.query('BEGIN');
      
      const { 
        id, 
        name, 
        description, 
        price, 
        discount_price, 
        rating, 
        category, 
        is_new, 
        is_hot,
        images // Array of image objects
      } = req.body;
      
      if (!id) {
        return res.status(400).json({ error: 'Product ID is required' });
      }

      // Check if product exists
      const productCheck = await client.query('SELECT id FROM products WHERE id = $1', [id]);
      if (productCheck.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }

      // Update product
      await client.query(
        `UPDATE products 
         SET name = $1, description = $2, price = $3, discount_price = $4, 
             rating = $5, category = $6, is_new = $7, is_hot = $8, updated_at = NOW()
         WHERE id = $9`,
        [name, description, price, discount_price, rating, category, is_new || false, is_hot || false, id]
      );

      // Update images if provided
      if (images) {
        // Get existing images to delete from blob storage
        const existingImagesResult = await client.query(
          'SELECT image_url FROM product_images WHERE product_id = $1 AND image_url LIKE $2',
          [id, '%blob.vercel-storage.com%']
        );
        
        const existingBlobUrls = existingImagesResult.rows.map(row => row.image_url);
        const newBlobUrls = images.map(img => img.url).filter(url => url.includes('blob.vercel-storage.com'));
        
        // Find URLs to delete (existing but not in new set)
        const urlsToDelete = existingBlobUrls.filter(url => !newBlobUrls.includes(url));
        
        // Delete old images from database
        await client.query('DELETE FROM product_images WHERE product_id = $1', [id]);
        
        // Insert new images
        for (let i = 0; i < images.length; i++) {
          const image = images[i];
          await client.query(
            'INSERT INTO product_images (product_id, image_url, image_order, is_primary) VALUES ($1, $2, $3, $4)',
            [
              id, 
              image.url, 
              image.order || (i + 1),
              image.is_primary || (i === 0)
            ]
          );
        }
        
        // Delete unused blob images after successful database update
        for (const url of urlsToDelete) {
          try {
            await del(url);
            console.log('Deleted unused blob image:', url);
          } catch (blobError) {
            console.warn('Failed to delete blob image:', blobError.message);
          }
        }
      }

      await client.query('COMMIT');

      // Fetch updated product with images
      const updatedProductQuery = `
        SELECT p.*, 
               COALESCE(
                 json_agg(
                   json_build_object(
                     'id', pi.id,
                     'url', pi.image_url,
                     'order', pi.image_order,
                     'is_primary', pi.is_primary
                   ) ORDER BY pi.image_order
                 ) FILTER (WHERE pi.id IS NOT NULL), 
                 '[]'::json
               ) as images
        FROM products p
        LEFT JOIN product_images pi ON p.id = pi.product_id
        WHERE p.id = $1
        GROUP BY p.id
      `;
      
      const result = await client.query(updatedProductQuery, [id]);
      res.status(200).json(result.rows[0]);
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Database error:', error);
      res.status(500).json({ error: 'Failed to update product', details: error.message });
    } finally {
      client.release();
    }
    return;
  }

  // DELETE product (DELETE)
  if (req.method === 'DELETE') {
    const client = await pool.connect();
    
    try {
      await client.query('BEGIN');
      
      const { id } = req.query;
      
      if (!id) {
        return res.status(400).json({ error: 'Product ID is required' });
      }

      // Get product images to delete from blob storage
      const imagesResult = await client.query(
        'SELECT image_url FROM product_images WHERE product_id = $1 AND image_url LIKE $2',
        [id, '%blob.vercel-storage.com%']
      );
      
      if (imagesResult.rows.length === 0) {
        // Check if product exists
        const productCheck = await client.query('SELECT id FROM products WHERE id = $1', [id]);
        if (productCheck.rows.length === 0) {
          return res.status(404).json({ error: 'Product not found' });
        }
      }

      // Delete the product (images will be deleted automatically due to CASCADE)
      const deleteResult = await client.query('DELETE FROM products WHERE id = $1 RETURNING id', [id]);
      
      if (deleteResult.rows.length === 0) {
        return res.status(404).json({ error: 'Product not found' });
      }

      await client.query('COMMIT');
      
      // Delete images from blob storage after successful database deletion
      for (const imageRow of imagesResult.rows) {
        try {
          await del(imageRow.image_url);
          console.log('Deleted image from blob:', imageRow.image_url);
        } catch (blobError) {
          console.warn('Failed to delete blob image (might already be deleted):', blobError.message);
        }
      }
      
      res.status(200).json({ 
        success: true, 
        message: 'Product and associated images deleted successfully',
        deletedId: parseInt(id)
      });
    } catch (error) {
      await client.query('ROLLBACK');
      console.error('Database error:', error);
      res.status(500).json({ error: 'Failed to delete product', details: error.message });
    } finally {
      client.release();
    }
    return;
  }

  // If no method matched
  res.status(405).json({ error: 'Method not allowed' });
}