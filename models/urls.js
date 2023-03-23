const mongoose = require("mongoose")
const Schema = mongoose.Schema
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