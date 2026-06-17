const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const connectDB = require('./config/db');
const { seedAdminAccount } = require('./controllers/adminController');

// Configure and load environment variables from .env
dotenv.config();

// Initialize express server instance
const app = express();

// Establish MongoDB connection and seed admin account
connectDB().then(() => {
  seedAdminAccount();
});

// Configure Middlewares
app.use(cors()); // Allow cross-origin communications
app.use(express.json()); // Enable parsing of incoming JSON payloads

// Mount API Route handlers
app.use('/api/contact', require('./routes/contactRoutes'));
app.use('/api/admin', require('./routes/adminRoutes'));

// Base health endpoint to check API server status
app.get('/', (req, res) => {
  res.status(200).json({ status: 'Online', message: 'MERN Portfolio API Server is running successfully' });
});

// Port configuration (Fall back to 5000 if not defined in environment)
const PORT = process.env.PORT || 5000;

// Start server listener
app.listen(PORT, () => {
  console.log(`[Server] Running successfully on port: ${PORT}`);
});
