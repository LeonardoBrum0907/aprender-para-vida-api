const mongoose = require("mongoose")
require("dotenv").config()

const connectDB = async () => {
      try {
            await mongoose.connect(process.env.ATLAS_URI)
            console.log("DB connect")
      } catch (error) {
            console.error(error)
      }
}

module.exports = connectDB