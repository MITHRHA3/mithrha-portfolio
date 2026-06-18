const mongoose = require('mongoose');

// Cache the connection state to reuse it across serverless function invocations
let isConnected = false;

/**
 * Establishes connection to the MongoDB Atlas cluster
 * using configuration variables loaded in process.env.
 */
const connectDB = async () => {
  if (isConnected) {
    console.log('[Database] Reusing existing MongoDB connection');
    return;
  }

  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    isConnected = conn.connections[0].readyState === 1;
    console.log(`[Database] MongoDB Atlas Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database Error] Failed to establish connection: ${error.message}`);
    throw error; // Throw error to be caught by Express error handlers or catch blocks instead of exiting
  }
};

module.exports = connectDB;
