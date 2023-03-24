// 載入框架、函式庫...
const express = require("express")
const router = express.Router()

// 載入模組
const home = require("./modules/home")
const urlRouter = require("./modules/url_router")

// router分流
router.use("/", home)
router.use("/url", urlRouter)

// module輸出
module.exports = router