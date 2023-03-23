const express = require("express")
const exphdbars = require("express-handlebars")
const app = express()
const mongoose = require("mongoose")

app.set("view engine", "handlebars")
app.engine("handlebars", exphdbars({ defaultLayout: "main" }))

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

app.listen(3000, () => {
  console.log("http://localhost:3000")
})
