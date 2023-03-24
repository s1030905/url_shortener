// 載入框架、函式庫、模組...
const express = require("express")
const URL = require("../../models/urls")
const router = express.Router()

// router分流
router.get("/", (req, res) => {
  res.render("index")
  // res.render("index", { path: "../../views/index" })
})

router.get("/:urlId", (req, res) => {
  const urlId = req.params.urlId
  URL.findOne({ urlShortener: `https://ptt.cc/${urlId}` })
    .then((url) => {
      console.log(url)
      res.redirect(url.name)
    })
    .catch(error => console.log(error))
})

module.exports = router