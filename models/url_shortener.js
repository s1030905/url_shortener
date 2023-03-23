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
  const symbol = "!@#$%^&*_+\=-"
  const allLetter = lowerCase + upperCase + number + symbol
  console.log(allLetter)
  // 定義短網址 example: https://ppt.cc/fHbXUx
  const urlShorter = `https://ppt.cc/${urlId}`
  const urlId = ""
  for (let i = 0; i < 6; i++) {
    const single = lowerCase.indexOf(Math.floor(Math.random() * (number.length)))
    urlId += single
  }
  console.log(Math.floor(Math.random() * (number.length)))
  console.log(urlId)

  // 產生短網址


  // 避免短網址重複


}

url_shortener(1)