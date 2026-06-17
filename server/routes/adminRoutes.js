const express = require('express');
const router = express.Router();
const { loginAdmin } = require('../controllers/adminController');

// Endpoint: POST /api/admin/login (Verify credentials)
router.post('/login', loginAdmin);

module.exports = router;
