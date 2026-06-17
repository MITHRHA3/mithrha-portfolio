const mongoose = require('mongoose');

/**
 * Establishes connection to the MongoDB Atlas cluster
 * using configuration variables loaded in process.env.
 */
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      // Configuration parameters for modern driver topology
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log(`[Database] MongoDB Atlas Connected successfully: ${conn.connection.host}`);
  } catch (error) {
    console.error(`[Database Error] Failed to establish connection: ${error.message}`);
    process.exit(1); // Terminate process with error code
  }
};

module.exports = connectDB;
