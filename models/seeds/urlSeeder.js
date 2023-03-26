const URL = require("../urls")
const mongoose = require("mongoose")
const db = mongoose.connection
const generator = require("../../url_shortener")

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

db.on("error", () => {
  console.log("mongodb failed")
})

db.once("open", () => {
  console.log("mongodb connect success")

  URL.create({ name: "https://www.google.com" })
    .then((url) => {
      const urlShortener = generator()
      url.urlShortener = urlShortener
      return url.save()
    })
  URL.create({ name: "https://www.w3schools.com/" })
    .then((url) => {
      const urlShortener = generator()
      url.urlShortener = urlShortener
      return url.save()
    })
  URL.create({ name: "https://medium.com/@wind8sky999" })
    .then((url) => {
      const urlShortener = generator()
      url.urlShortener = urlShortener
      return url.save()
    })

    .catch(error => console.log(error))

  console.log("seeder created")
})