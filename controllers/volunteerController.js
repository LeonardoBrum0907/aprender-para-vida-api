const Volunteer = require("../models/Volunteer")
const mongoose = require("mongoose")

exports.getAllVolunteers = async (req, res) => {
      const volunteers = await Volunteer.find()
      return res.send(volunteers)
}

exports.deleteVolunteer = async (req, res) => {
      await Volunteer.findByIdAndDelete(req.params.id)
      const updatedVolunteers = await Volunteer.find()
      return res.send(updatedVolunteers)
}

exports.updateVolunteer = async (req, res) => {
      await Volunteer.updateOne({_id: new mongoose.mongo.ObjectId(req.params.id)}, {
            ...req.body
      })
      const updatedVolunteer = await Volunteer.findById(req.params.id)
      return res.send(updatedVolunteer)
}

exports.createVolunteer = async (req, res) => {
      const newVolunteer = new Volunteer(req.body)
      await newVolunteer.save()
      return res.send(newVolunteer)
}
