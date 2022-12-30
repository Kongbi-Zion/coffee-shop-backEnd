const mongoose = require('mongoose')
const DATABASE = process.env.DATABASE
const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb://localhost:27017/coffee-shop')

    console.log(`MongoDB Connected: ${conn.connection.host}`.underline)
  } catch (error) {
    console.log(error)
    process.exit(1);
  }
}

module.exports = connectDB
