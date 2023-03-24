// 載入框架、函式庫、模組...
const express = require("express")
const URL = require("../../models/urls")
const router = express.Router()

// router分流
router.get("/:id", (req, res) => {
  const id = req.params.id
  URL.findOne({ urlShortener: `http://localhost:3000/r/${id}` })
    .then((url) => {
      res.redirect(url.name)
    })
    .catch(error => console.log(error))
})

module.exports = router