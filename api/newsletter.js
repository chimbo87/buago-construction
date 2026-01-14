import { Pool } from 'pg';

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

export default async function handler(req, res) {
  // CORS headers - same as your other endpoints
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    switch (req.method) {
      case 'POST':
        return await createNewsletterSignup(req, res);
      case 'GET':
        return await getNewsletterSignups(req, res);
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}

// POST - Create new newsletter signup
async function createNewsletterSignup(req, res) {
  const client = await pool.connect();
  
  try {
    const { email } = req.body;

    // Validate email
    if (!email) {
      return res.status(400).json({ error: 'Email is required' });
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address' });
    }

    await client.query('BEGIN');

    const result = await client.query(
      `INSERT INTO newsletter_signups (email)
       VALUES ($1)
       RETURNING id, email, created_at`,
      [email.toLowerCase()]
    );

    await client.query('COMMIT');

    return res.status(201).json({
      success: true,
      message: 'Successfully signed up for newsletter!',
      data: result.rows[0]
    });
  } catch (error) {
    await client.query('ROLLBACK');
    
    // Handle duplicate email error
    if (error.code === '23505') {
      return res.status(409).json({ 
        error: 'This email is already subscribed to our newsletter' 
      });
    }
    
    console.error('Database error:', error);
    return res.status(500).json({ 
      error: 'Failed to create newsletter signup',
      details: error.message 
    });
  } finally {
    client.release();
  }
}

// GET - Get all newsletter signups or by ID
async function getNewsletterSignups(req, res) {
  try {
    const { id } = req.query;

    if (id) {
      // Get specific signup by ID
      const result = await pool.query(
        'SELECT id, email, created_at, is_active FROM newsletter_signups WHERE id = $1',
        [id]
      );

      if (result.rows.length === 0) {
        return res.status(404).json({ error: 'Newsletter signup not found' });
      }

      return res.status(200).json({
        success: true,
        data: result.rows[0]
      });
    } else {
      // Get all active signups
      const result = await pool.query(
        'SELECT id, email, created_at, is_active FROM newsletter_signups WHERE is_active = true ORDER BY created_at DESC'
      );

      return res.status(200).json({
        success: true,
        data: result.rows,
        count: result.rows.length
      });
    }
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch newsletter signups',
      details: error.message 
    });
  }
}