const mongoose = require("mongoose")
const db = mongoose.connection

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config()
}
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

db.on("error", () => {
  console.log("mongodb failed")
})
db.once("open", () => {
  console.log("mongodb success")
})

module.exports = db