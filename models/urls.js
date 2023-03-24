// 載入框架、函式庫、模組...
const mongoose = require("mongoose")
const Schema = mongoose.Schema

// 定義 Schema
const urlSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  urlShortener: {
    type: String,
    default: ""
  }
})

module.exports = mongoose.model("URL", urlSchema)