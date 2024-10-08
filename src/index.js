const express = require("express")
const mongoose = require("mongoose")
require("dotenv").config()

const app = express()
const port = 3000

app.use(express.json())

const Volunteers = mongoose.model('Volunteers', {
      name: String,
      email: String,
      phone: String,
      address: String,
      area: String,
      availability: String,
      comment: String
})

app.get("/", async (req, res) => {
      const volunteers = await Volunteers.find()
      return res.send(volunteers)
})

app.delete("/:id",  async (req, res) => {
      const volunteer = await Volunteers.findByIdAndDelete(req.params.id);
      return res.send(volunteer)
})

app.put("/:id",  async (req, res) => {
      const volunteer = await Volunteers.findByIdAndUpdate(req.params.id, {
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            area: req.body.area,
            availability: req.body.availability,
            comment: req.body.comment
      }, {
            new: true
      });
      return res.send(volunteer)
})

app.post("/", async (req, res) => {
      const volunteer = new Volunteers({
            name: req.body.name,
            email: req.body.email,
            phone: req.body.phone,
            address: req.body.address,
            area: req.body.area,
            availability: req.body.availability,
            comment: req.body.comment
      })

      await volunteer.save()
      return res.send(volunteer)
})

app.listen(port, () => {
      mongoose
            .connect("mongodb+srv://leonardobrumdev:sMd6hZNYnRim6ivn@aprender-para-vida.tihfy.mongodb.net/?retryWrites=true&w=majority&appName=aprender-para-vida")
            .then(() => console.log("BD conectado"))
            .catch(err => console.log(err));
      console.log(`Está rodando na porta: ${port}`)
})
