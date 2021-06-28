const express = require("express")

const router = express.Router();

router.get('/', (req, res) => {
    res.sendFile(process.cwd() + "/pages/index/index.html")

})

router.get('/tablo' , (req,res) => {
    res.sendFile(process.cwd() + "/pages/tablo/tablo.html")
})

router.get('/harita' , (req,res) => {
    res.sendFile(process.cwd() + "/pages/harita/harita.html")
})

router.get('/style.css', (req, res) => {
    res.sendFile(process.cwd() + "/pages/index/style.css")
})

router.get('/kod.js' , (req,res) => {
    res.sendFile(process.cwd() + "/pages/index/kod.js")
})

router.get('/favicon' , (req,res) => {
    res.sendFile(process.cwd() + "/pages/index/favicon.png")
})

router.use((req, res) => {
    res.status(404).send("404 - Bulunamadı")
})

module.exports = router;