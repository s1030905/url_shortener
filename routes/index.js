const express = require("express")
const router = express.Router()

const home = require("./modules/home")
const urlRouter = require("./modules/url_router")

router.use("/", home)
router.use("/url", urlRouter)

module.exports = router