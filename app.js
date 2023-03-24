const express = require("express")
const exphdbars = require("express-handlebars")
const app = express()
const bodyParser = require("body-parser")
const routes = require("./routes/index")
require("./config/mongoose")

app.set("view engine", "handlebars")
app.engine("handlebars", exphdbars({ defaultLayout: "main" }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(routes)

app.listen(3000, () => {
  console.log("http://localhost:3000")
})
