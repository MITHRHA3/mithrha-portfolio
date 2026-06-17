const Admin = require('../models/Admin');
const jwt = require('jsonwebtoken');

// Helper to sign JWT authorization token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '30d', // Expiry duration (30 days)
  });
};

/**
 * @desc    Authenticates administrator credentials and returns signed JWT
 * @route   POST /api/admin/login
 * @access  Public
 */
const loginAdmin = async (req, res) => {
  const { username, password } = req.body;

  try {
    if (!username || !password) {
      return res.status(400).json({ success: false, message: 'Please provide both username and password' });
    }

    // Find admin by username, explicitly including password field which is hidden by default
    const admin = await Admin.findOne({ username }).select('+password');

    // Verify user exists and credentials match
    if (admin && (await admin.matchPassword(password))) {
      return res.status(200).json({
        success: true,
        token: generateToken(admin._id),
        user: {
          id: admin._id,
          username: admin.username,
          email: admin.email,
          role: admin.role,
        },
      });
    } else {
      return res.status(401).json({ success: false, message: 'Invalid authentication credentials' });
    }
  } catch (error) {
    console.error(`[Auth API Error] Login failed: ${error.message}`);
    return res.status(500).json({ success: false, message: 'Server authentication pipeline failed' });
  }
};

/**
 * Seeds a default administrator account if the collection is empty.
 * Run on server startup to allow immediate login testing.
 */
const seedAdminAccount = async () => {
  try {
    const adminCount = await Admin.countDocuments();
    if (adminCount === 0) {
      const defaultUser = 'admin';
      const defaultPass = 'admin123';
      const defaultEmail = 'mithrha.y2024cse@sece.ac.in';

      await Admin.create({
        username: defaultUser,
        email: defaultEmail,
        password: defaultPass,
        role: 'admin',
      });
      console.log(`[Database Seed] Default Admin seeded: User: "${defaultUser}" | Pass: "${defaultPass}"`);
    }
  } catch (error) {
    console.error(`[Database Seed Error] Seeding operation failed: ${error.message}`);
  }
};

module.exports = {
  loginAdmin,
  seedAdminAccount,
};
