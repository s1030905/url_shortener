const URL = require("../urls")
// require("../../config/mongoose")
const mongoose = require("mongoose")
const db = mongoose.connection

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: '../../.env' })
}
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

db.on("error", () => {
  console.log("mongodb failed")
})
db.once("open", () => {
  console.log("mongodb success")
})

db.once("open", () => {
  console.log("mongodb connect success")

  URL.create({ name: "https://www.google.com" })
    .then((url) => {
      return URL.findOne({ name: url.name })
    })
    .then(url => {
      const id = url._id.toString()
      const urlId = id.slice(-6)
      url.urlShortener = `https://ptt.cc/${urlId}`
      return url.save()
    })
    .catch(error => console.log(error))

  console.log("seeder created")
})