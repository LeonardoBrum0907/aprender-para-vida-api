const mongoose = require("mongoose")

const VolunteerSchema = new mongoose.Schema({
      name: String,
      email: String,
      phone: String,
      address: String,
      area: String,
      availability: String,
      status: String,
      comment: String
})

module.exports = mongoose.model("Volunteer", VolunteerSchema);
