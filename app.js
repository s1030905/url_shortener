const express = require("express")
const exphdbars = require("express-handlebars")
const app = express()
const URL = require("./models/urls")
const bodyParser = require("body-parser")
const routes = require("./routes/index")
require("./config/mongoose")

app.set("view engine", "handlebars")
app.engine("handlebars", exphdbars({ defaultLayout: "main" }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

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
