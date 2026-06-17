const express = require('express');
const router = express.Router();
const { createMessage, getMessages, deleteMessage } = require('../controllers/contactController');
const { protect } = require('../middleware/authMiddleware');

// Endpoint: POST /api/contact (Public submit form)
router.post('/', createMessage);

// Endpoint: GET /api/contact (Protected fetch lists)
router.get('/', protect, getMessages);

// Endpoint: DELETE /api/contact/:id (Protected deletion log)
router.delete('/:id', protect, deleteMessage);

module.exports = router;
