const express = require("express")
const exphdbars = require("express-handlebars")
const app = express()
const mongoose = require("mongoose")
const URL = require("./models/urls")
const bodyParser = require("body-parser")
const methodOverride = require("method-override")

app.set("view engine", "handlebars")
app.engine("handlebars", exphdbars({ defaultLayout: "main" }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on("error", () => {
  console.log("mongodb failed")
})
db.once("open", () => {
  console.log("mongodb success")
})

app.get("/", (req, res) => {
  res.render("index")
})

app.post("/url", (req, res) => {
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

app.get("/url/:id", (req, res) => {
  const id = req.params.id
  return URL.findById(id)
    .lean()
    .then((url) => res.render("new", { url }))
    .catch(error => console.log(error))
})

app.get("/:urlId", (req, res) => {
  const urlId = req.params.urlId
  URL.findOne({ urlShortener: `https://ptt.cc/${urlId}` })
    .then((url) => {
      console.log(url)
      res.redirect(url.name)
    })
    .catch(error => console.log(error))
})

app.listen(3000, () => {
  console.log("http://localhost:3000")
})
