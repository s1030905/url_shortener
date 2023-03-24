// 載入框架、函式庫、模組...
const express = require("express")
const router = express.Router()
const URL = require("../../models/urls")
const generator = require("../../url_shortener")

// router分流
router.post("/", (req, res) => {
  const name = req.body.name
  // 判斷資料庫是否存在相同網址 ----------------------------------->例外處理
  URL.findOne({ name: name })
    .then(url => {
      // 沒有=>新建資料
      if (!url) {
        URL.create({ name: name })
          .then(() => {
            return URL.findOne({ name: name })
          })
          .then(url => {
            const id = url._id
            res.redirect(`/url/${id}`)
            const urlShortener = generator()
            url.urlShortener = urlShortener
            return url.save()
          })
          .catch(error => console.log(error))
      }
      // 有=>redirect存在網址
      else {
        const id = url._id
        res.redirect(`http://localhost:3000/url/${id}`)
      }
    })

})

router.get("/:id", (req, res) => {
  const id = req.params.id
  // const urlId = id.slice(-6)
  return URL.findById(id)
    .lean()
    .then((url) => res.render("new", { url }))
    .catch(error => console.log(error))
})


module.exports = router