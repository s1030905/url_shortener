// 載入框架、函式庫、模組...
const express = require("express")
const router = express.Router()
const URL = require("../../models/urls")

// router分流
router.post("/", (req, res) => {
  const name = req.body.name
  URL.create({ name: name })
    .then(() => {
      return URL.findOne({ name: name })
    })
    .then(url => {
      const id = url._id.toString()
      const urlId = id.slice(-6)
      res.redirect(`/url/${id}`)
      url.urlShortener = `https://ptt.cc/${urlId}`
      return url.save()
    })
    .catch(error => console.log(error))
})

router.get("/:id", (req, res) => {
  const id = req.params.id
  return URL.findById(id)
    .lean()
    .then((url) => res.render("new", { url }))
    .catch(error => console.log(error))
})


module.exports = router