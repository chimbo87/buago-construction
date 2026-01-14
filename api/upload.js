import { put } from '@vercel/blob';

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const body = req.body;
    
    // Handle single image upload (backward compatibility)
    if (body.filename && body.data) {
      const { filename, filetype, data } = body;
      
      // Convert base64 to buffer
      const fileBuffer = Buffer.from(data, 'base64');
      
      // Upload to Vercel Blob
      const blob = await put(filename, fileBuffer, {
        access: 'public',
        contentType: filetype || 'image/jpeg'
      });

      return res.status(200).json({ 
        success: true, 
        url: blob.url 
      });
    }
    
    // Handle multiple images upload
    if (body.images && Array.isArray(body.images)) {
      const { images } = body;
      
      if (images.length === 0) {
        return res.status(400).json({ error: 'No images provided' });
      }
      
      if (images.length > 10) { // Limit to 10 images per batch
        return res.status(400).json({ error: 'Maximum 10 images allowed per batch' });
      }
      
      const uploadPromises = images.map(async (image, index) => {
        const { filename, filetype, data } = image;
        
        if (!filename || !data) {
          throw new Error(`Image at index ${index} missing filename or data`);
        }
        
        // Validate file size (base64 string length approximates file size)
        const estimatedSize = (data.length * 3) / 4; // Convert base64 length to bytes
        const maxSize = 10 * 1024 * 1024; // 10MB limit
        
        if (estimatedSize > maxSize) {
          throw new Error(`Image at index ${index} exceeds 10MB limit`);
        }
        
        // Convert base64 to buffer
        const fileBuffer = Buffer.from(data, 'base64');
        
        // Generate unique filename to avoid conflicts
        const timestamp = Date.now();
        const randomStr = Math.random().toString(36).substring(2, 8);
        const uniqueFilename = `${timestamp}-${randomStr}-${filename}`;
        
        // Upload to Vercel Blob
        const blob = await put(uniqueFilename, fileBuffer, {
          access: 'public',
          contentType: filetype || 'image/jpeg'
        });
        
        return {
          originalFilename: filename,
          url: blob.url,
          order: index + 1
        };
      });
      
      const uploadResults = await Promise.all(uploadPromises);
      
      return res.status(200).json({
        success: true,
        message: `Successfully uploaded ${uploadResults.length} images`,
        images: uploadResults
      });
    }
    
    return res.status(400).json({ 
      error: 'Invalid request format. Provide either single image (filename, data) or multiple images array.' 
    });

  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ 
      error: 'Upload failed',
      message: error.message 
    });
  }
}

export const config = {
  api: {
    bodyParser: {
      sizeLimit: '50mb', // Increased limit for multiple images
    },
  },
}