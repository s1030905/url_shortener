// 載入框架、函式庫...
const mongoose = require("mongoose")

//連結MONGODB、利用dotenv遮蓋敏感資訊
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