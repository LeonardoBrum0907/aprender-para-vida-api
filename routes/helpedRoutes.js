const express = require("express")
const router = express.Router()
const helpedController = require("../controllers/helpedController")

router.get("/", helpedController.getAllHelped)
router.post("/", helpedController.createHelped)
router.put("/:id", helpedController.updateHelped)
router.delete("/:id", helpedController.deleteHelped)

module.exports = router