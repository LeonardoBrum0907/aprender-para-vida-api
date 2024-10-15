const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require("dotenv").config()

const app = express()
const port = 3000

app.use(cors())
app.use(express.json())

const Volunteers = mongoose.model('Volunteers', {
      name: String,
      email: String,
      phone: String,
      address: String,
      area: String,
      availability: String,
      status: String,
      comment: String
})

const Helped = mongoose.model('Helped', {
      name: String,
      email: String,
      phone: String,
      address: String,
      area: String,
      status: String,
      comment: String
})

//volunteers
app.get("/volunteers", async (req, res) => {
      const volunteers = await Volunteers.find()
      return res.send(volunteers)
})

app.delete("/volunteers/:id",  async (req, res) => {
      const volunteer = await Volunteers.findByIdAndDelete(req.params.id);
      return res.send(volunteer)
})

app.put("/volunteers/:id",  async (req, res) => {      
      await Volunteers.updateOne({ _id: new mongoose.mongo.ObjectId(req.params.id) }, {
            ...req.body
      }, {
            new: true
      });

      const updatedVolunteer = await Volunteers.findById(req.params.id);

      return res.send(updatedVolunteer)
})

app.post("/volunteers", async (req, res) => {
      const volunteer = new Volunteers({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            area: req.body.area,
            availability: req.body.availability,
            status: req.body.status,
            comment: req.body.comment
      })

      await volunteer.save()
      return res.send(volunteer)
})

//helped
app.get("/helped", async (req, res) => {
      const helped = await Helped.find()
      return res.send(helped)
})

app.delete("/helped/:id",  async (req, res) => {
      const helped = await Helped.findByIdAndDelete(req.params.id);
      return res.send(helped)
})

app.put("/helped/:id",  async (req, res) => {
      const helped = await Helped.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            area: req.body.area,
            status: req.body.status,
            comment: req.body.comment
      }, {
            new: true
      });
      return res.send(helped)
})

app.post("/helped", async (req, res) => {
      const helped = new Helped({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            area: req.body.area,
            status: req.body.status,
            comment: req.body.comment
      })

      await helped.save()
      return res.send(helped)
})

app.listen(port, () => {
      mongoose
            .connect(process.env.ATLAS_URI)
            .then(() => console.log("BD conectado"))
            .catch(err => console.log(err));
      console.log(`Está rodando na porta: ${port}`)
})
