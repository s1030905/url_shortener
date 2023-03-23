const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
  res.render("index")
  // res.render("index", { path: "../../views/index" })
})


module.exports = router