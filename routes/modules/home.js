// 載入框架、函式庫、模組...
const express = require("express")
const URL = require("../../models/urls")
const router = express.Router()

// router分流
router.get("/", (req, res) => {
  res.render("index")
})

module.exports = router