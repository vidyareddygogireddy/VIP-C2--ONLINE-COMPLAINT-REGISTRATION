const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const dbURI = (process.env.MONGO_URI && !process.env.MONGO_URI.includes('localhost')) 
      ? process.env.MONGO_URI 
      : (process.env.MONGO_URL || 'mongodb://localhost:27017/complaint-reg');
    const conn = await mongoose.connect(dbURI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Database connection error: ${error.message}`);
    // process.exit(1);
  }
};

module.exports = connectDB;
