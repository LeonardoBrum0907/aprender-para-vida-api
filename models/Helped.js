const mongoose = require("mongoose")

const Helped = mongoose.Schema({
      name: String,
      email: String,
      phone: String,
      address: String,
      area: String,
      status: String,
      comment: String
})

module.exports = mongoose.model("Helped", Helped)