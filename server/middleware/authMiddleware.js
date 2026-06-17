const jwt = require('jsonwebtoken');
const Admin = require('../models/Admin');

/**
 * Protects routes by validating Bearer JWT tokens.
 * Extracts the user credentials and assigns them to the request context.
 */
const protect = async (req, res, next) => {
  let token;

  // Check if Bearer Authorization headers exist
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith('Bearer')
  ) {
    try {
      // Split header to extract token
      token = req.headers.authorization.split(' ')[1];

      // Decode and verify signatures
      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      // Fetch admin user matching the token signature (omitting password hash)
      req.user = await Admin.findById(decoded.id);

      if (!req.user) {
        return res.status(401).json({ success: false, message: 'User not authorized or no longer exists' });
      }

      return next(); // Proceed to route handler
    } catch (error) {
      console.error(`[JWT Error] Token signature validation failed: ${error.message}`);
      return res.status(401).json({ success: false, message: 'Authorization validation failed, invalid token' });
    }
  }

  if (!token) {
    return res.status(401).json({ success: false, message: 'Not authorized, token credential is missing' });
  }
};

module.exports = { protect };
