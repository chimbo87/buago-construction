import { Pool } from 'pg';

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

  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    switch (req.method) {
      case 'POST':
        return await createContactSubmission(req, res);
      case 'GET':
        if (req.query.id) {
          return await getContactSubmissionById(req, res);
        } else {
          return await getAllContactSubmissions(req, res);
        }
      default:
        res.setHeader('Allow', ['GET', 'POST']);
        return res.status(405).json({ error: 'Method not allowed' });
    }
  } catch (error) {
    console.error('API Error:', error);
    return res.status(500).json({ error: 'Internal server error', details: error.message });
  }
}

// POST - Create new contact form submission
async function createContactSubmission(req, res) {
  const client = await pool.connect();
  
  try {
    const { name, email, subject, message } = req.body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ error: 'Please provide a valid email address' });
    }

    await client.query('BEGIN');

    const result = await client.query(
      `INSERT INTO contact_submissions (name, email, subject, message)
       VALUES ($1, $2, $3, $4)
       RETURNING id, name, email, subject, message, status, created_at`,
      [name.trim(), email.toLowerCase().trim(), subject.trim(), message.trim()]
    );

    await client.query('COMMIT');

    return res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully!',
      data: result.rows[0]
    });
  } catch (error) {
    await client.query('ROLLBACK');
    
    console.error('Database error:', error);
    return res.status(500).json({ 
      error: 'Failed to submit contact form',
      details: error.message 
    });
  } finally {
    client.release();
  }
}

// GET - Get all contact submissions with optional filtering and pagination
async function getAllContactSubmissions(req, res) {
  try {
    const { status, page = 1, limit = 10, sort = 'created_at', order = 'desc' } = req.query;
    
    // Validate page and limit
    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);
    const offset = (pageNum - 1) * limitNum;
    
    if (pageNum < 1 || limitNum < 1 || limitNum > 100) {
      return res.status(400).json({ error: 'Invalid pagination parameters' });
    }

    // Build WHERE clause
    let whereClause = '';
    let queryParams = [];
    let paramCount = 0;

    if (status) {
      paramCount++;
      whereClause = `WHERE status = $${paramCount}`;
      queryParams.push(status);
    }

    // Validate sort column
    const validSortColumns = ['id', 'name', 'email', 'subject', 'status', 'created_at', 'updated_at'];
    const sortColumn = validSortColumns.includes(sort) ? sort : 'created_at';
    
    // Validate order
    const sortOrder = order.toLowerCase() === 'asc' ? 'ASC' : 'DESC';

    // Get total count for pagination
    const countQuery = `SELECT COUNT(*) FROM contact_submissions ${whereClause}`;
    const countResult = await pool.query(countQuery, queryParams);
    const totalCount = parseInt(countResult.rows[0].count);
    const totalPages = Math.ceil(totalCount / limitNum);

    // Get paginated results
    queryParams.push(limitNum, offset);
    const submissionsQuery = `
      SELECT id, name, email, subject, message, status, created_at, updated_at
      FROM contact_submissions 
      ${whereClause}
      ORDER BY ${sortColumn} ${sortOrder}
      LIMIT $${paramCount + 1} OFFSET $${paramCount + 2}
    `;

    const result = await pool.query(submissionsQuery, queryParams);

    return res.status(200).json({
      success: true,
      data: result.rows,
      pagination: {
        currentPage: pageNum,
        totalPages,
        totalItems: totalCount,
        itemsPerPage: limitNum,
        hasNext: pageNum < totalPages,
        hasPrev: pageNum > 1
      }
    });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch contact submissions',
      details: error.message 
    });
  }
}

// GET - Get specific contact submission by ID
async function getContactSubmissionById(req, res) {
  try {
    const { id } = req.query;

    if (!id || isNaN(parseInt(id))) {
      return res.status(400).json({ error: 'Valid ID is required' });
    }

    const result = await pool.query(
      `SELECT id, name, email, subject, message, status, created_at, updated_at
       FROM contact_submissions 
       WHERE id = $1`,
      [id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Contact submission not found' });
    }

    return res.status(200).json({
      success: true,
      data: result.rows[0]
    });
  } catch (error) {
    console.error('Database error:', error);
    return res.status(500).json({ 
      error: 'Failed to fetch contact submission',
      details: error.message 
    });
  }
}