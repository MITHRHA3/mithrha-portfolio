const mongoose = require('mongoose');
require('dotenv').config();

const connectAndQuery = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB Connected successfully!');

    // Query Contact messages
    const ContactSchema = new mongoose.Schema({}, { strict: false });
    const Contact = mongoose.model('Contact', ContactSchema);
    const messages = await Contact.find({});
    console.log(`Total messages found: ${messages.length}`);
    console.log('Messages:', JSON.stringify(messages, null, 2));

    // Query Admin users
    const AdminSchema = new mongoose.Schema({}, { strict: false });
    const Admin = mongoose.model('Admin', AdminSchema);
    const admins = await Admin.find({});
    console.log(`Total admins found: ${admins.length}`);
    console.log('Admins:', JSON.stringify(admins, null, 2));

    process.exit(0);
  } catch (error) {
    console.error('Error connecting or querying database:', error);
    process.exit(1);
  }
};

connectAndQuery();
