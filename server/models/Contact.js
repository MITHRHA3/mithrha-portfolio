const mongoose = require('mongoose');

// Schema mapping for visitor message queries
const ContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required to log message'],
    trim: true,
  },
  email: {
    type: String,
    required: [true, 'Email is required to log message'],
    trim: true,
    lowercase: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      'Please supply a valid email address',
    ],
  },
  message: {
    type: String,
    required: [true, 'Message content cannot be blank'],
  },
  createdAt: {
    type: Date,
    default: Date.now, // Automatically set date/time of submission
  },
});

module.exports = mongoose.model('Contact', ContactSchema);
