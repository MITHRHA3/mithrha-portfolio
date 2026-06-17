const Contact = require('../models/Contact');

/**
 * @desc    Create a contact message from visitor
 * @route   POST /api/contact
 * @access  Public
 */
const createMessage = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    // Check for mandatory payload fields
    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: 'Please supply name, email, and message' });
    }

    // Save record to MongoDB Atlas
    const newMessage = await Contact.create({
      name,
      email,
      message,
    });

    return res.status(201).json({ success: true, data: newMessage });
  } catch (error) {
    console.error(`[Contact API Error] Create failed: ${error.message}`);
    return res.status(500).json({ success: false, message: 'Message processing error, please try again' });
  }
};

/**
 * @desc    Fetch list of all logged inquiries (sorted by latest first)
 * @route   GET /api/contact
 * @access  Private (Admin protected)
 */
const getMessages = async (req, res) => {
  try {
    const messages = await Contact.find().sort({ createdAt: -1 });
    return res.status(200).json({ success: true, count: messages.length, data: messages });
  } catch (error) {
    console.error(`[Contact API Error] Fetch failed: ${error.message}`);
    return res.status(500).json({ success: false, message: 'Failed to retrieve messages list' });
  }
};

/**
 * @desc    Delete a message from database by its unique identifier
 * @route   DELETE /api/contact/:id
 * @access  Private (Admin protected)
 */
const deleteMessage = async (req, res) => {
  try {
    const message = await Contact.findById(req.params.id);

    if (!message) {
      return res.status(404).json({ success: false, message: 'Query message not found' });
    }

    // Execute deletion query
    await message.deleteOne();
    return res.status(200).json({ success: true, message: 'Message query log removed successfully' });
  } catch (error) {
    console.error(`[Contact API Error] Delete failed: ${error.message}`);
    return res.status(500).json({ success: false, message: 'Error occurred while deleting message log' });
  }
};

module.exports = {
  createMessage,
  getMessages,
  deleteMessage,
};
