const express = require("express")
const exphdbars = require("express-handlebars")
const app = express()
const mongoose = require("mongoose")
const URL = require("./models/urls")
const bodyParser = require("body-parser")
const routes = require("./routes/index")

app.set("view engine", "handlebars")
app.engine("handlebars", exphdbars({ defaultLayout: "main" }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

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
