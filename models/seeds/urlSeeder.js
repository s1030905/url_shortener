const mongoose = require("mongoose")
const URL = require("../urls")
const db = mongoose.connection

if (process.env.NODE_ENV !== "production") {
  require("dotenv").config({ path: '../../.env' })
}
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })

db.on("error", () => {
  console.log("mongodb connect failed")
})
db.once("open", () => {
  console.log("mongodb connect success")
  for (let i = 0; i < 17; i++) {
    URL.create({ name: `${i}` })
  }
  // URL.create({ name: "https://www.google.com" })
  console.log("seeder created")
})