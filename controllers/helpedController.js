const Helped = require("../models/Helped")
const mongoose = require("mongoose")

exports.getAllHelped = async (req, res) => {
      const helpeds = await Helped.find()
      return res.send(helpeds)
}

exports.deleteHelped = async (req, res) => {
      await Helped.findByIdAndDelete(req.params.id)
      const updatedHelpeds = await Helped.find()
      return res.send(updatedHelpeds)
}

exports.updateHelped = async (req, res) => {
      await Helped.updateOne({_id: new mongoose.mongo.ObjectId(req.params.id)}, {
            ...req.body
      })
      const updatedHelped = await Helped.findById(req.params.id)
      return res.send(updatedHelped)
}

exports.createHelped = async (req, res) => {
      const newHelped = new Helped(req.body)
      await newHelped.save()
      return res.send(newHelped)
}
