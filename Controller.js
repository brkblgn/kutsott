const express = require("express")

const router = express.Router();

let folder = "/api/";

const DBKayit = require('./database/DBKayit.js')

var time = require('./modules/time');

var mqtt = require('./modules/mqtt');


router.get(folder + "time", function (req, res) {

    //console.log("TIME ISTENDI");

    res.send(zaman.zaman.call());
});


router.post(folder + "send", (req, res, next) => {

    //console.log("SEND ISTENDI");


    const { token, topic, message } = req.body;

    if(!token || !topic ||  !message) return res.sendFile(__dirname + "/pages/responses/hata.html");

    mqtt.gonder(token, topic, message)

    DBKayit.kayit(token, message , time.now.call()) 

    res.sendFile(__dirname +  "/pages/responses/basarili.html");

   // res.send(`Token: ${token} , Topic: ${topic} , Message: ${message}`);

});


router.get('/' , (req,res) => {
    res.sendFile(__dirname + "/pages/index.html")
})

router.get('/pages/style.css', (req,res) => {
    res.sendFile(__dirname + "/pages/style.css")
})

router.use( (req,res) => {
    res.send("404 - Bulunamadı")
})


module.exports = router;