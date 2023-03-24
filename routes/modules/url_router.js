// 載入框架、函式庫、模組...
const express = require("express")
const router = express.Router()
const URL = require("../../models/urls")

// router分流
router.post("/", (req, res) => {
  const name = req.body.name
  if (URL.findOne({ name: name }).name !== name) {
    console.log(URL.find({ name: name }))
    // console.log(typeof (URL.findOne({ name: name })))
    console.log(name)
    URL.create({ name: name })
      .then(() => {
        return URL.findOne({ name: name })
      })
      .then(url => {
        const id = url._id.toString()
        const urlId = id.slice(-6)
        res.redirect(`/url/${id}`)
        url.urlShortener = `http://localhost:3000/${urlId}`
        return url.save()
      })
      .catch(error => console.log(error))
  }
  else {
    return res.send("重複了")
  }

  // URL.create({ name: name })
  //   .then(() => {
  //     return URL.findOne({ name: name })
  //   })
  //   .then(url => {
  //     const id = url._id.toString()
  //     const urlId = id.slice(-6)
  //     res.redirect(`/url/${id}`)
  //     url.urlShortener = `http://localhost:3000/${urlId}`
  //     return url.save()
  //   })
  //   .catch(error => console.log(error))
})

router.get("/:id", (req, res) => {
  const id = req.params.id
  const urlId = id.slice(-6)
  return URL.findById(id)
    .lean()
    .then((url) => res.render("new", { url, urlId }))
    // .then(() => copy())
    .catch(error => console.log(error))
})


module.exports = router