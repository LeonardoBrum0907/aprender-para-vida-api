const express = require("express")
const cors = require("cors")

const volunteerRoutes = require("./routes/volunteerRoutes")
const helpedRoutes = require("./routes/helpedRoutes")

const app = express()

app.use(cors())
app.use(express.json())

app.use("/volunteers", volunteerRoutes)
app.use("/helpeds", helpedRoutes)

module.exports = app
