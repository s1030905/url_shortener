// const mongoose = require("mongoose")
// const URL = require("./urls")
// const bodyParser = require("body-parser")

// if (process.env.NODE_ENV !== "production") {
//   require("dotenv").config()
// }
// mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
// const db = mongoose.connection

// app.use(bodyParser.urlencoded({ extended: true }))

function url_shortener(url) {

  // 決定短網址亂碼由哪些組成
  const lowerCase = "abcdefghijklmnopqrstuvwxyz"
  const upperCase = lowerCase.toUpperCase()
  const number = "1234567890"
  const allLetter = lowerCase + upperCase + number
  // 定義短網址 example: https://ppt.cc/fHbXUx
  let urlId = ""
  for (let i = 0; i < 6; i++) {
    const single = allLetter[Math.floor(Math.random() * (allLetter.length))]
    urlId += single
  }
  const urlShorter = `http://localhost:3000/r/${urlId}`

  // 避免短網址重複


  // 產生短網址
  return urlShorter
}

module.exports = url_shortener