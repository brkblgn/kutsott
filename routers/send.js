const express = require("express");

const SendRouter = express.Router();

const DbData = require('../modules/database/Data/DbData')

const postValidation = require('../validation/PersonalValidation')
const dataValidation = require('../validation/DataValidation')

var mqtt = require('../modules/mqtt');

var time = require('../modules/time');

SendRouter.post("/", (req, res, next) => {


    const { UserToken, topic, message } = req.body;

    //#region Validations
    const PersonalErrors = postValidation.bilgiKontrol(UserToken, topic, message);    //UserToken, topic veya message boş mu dolu mu kontrol etmek için PersonelValidation içerisindeki bilgiKontrol fonksiyonuna parametrelerimizi gönderdik.

    if (PersonalErrors.length > 0) return res.send(PersonalErrors);              //eğer gelen cevap içerisindeki dizenin eleman sayısı 0'dan fazla ise hata aldık demektir. O hatayı cevaba yazdırıyoruz.

    const DataErrors = dataValidation.dataKontrol(message);                     //aynı şekilde message değerimizi dataKontrol fonksiyonuna gönderiyoruz ve kullanıcının 3'ten fazla sensör verisi gönderip göndermediğini denetliyoruz.

    if (DataErrors.length > 0) return res.send(DataErrors)                       //eğer hata almışsak bunu response'a yazdırıyoruz.

    //#endregion

    mqtt.gonder(UserToken, topic, message)

    DbData.kayit(UserToken, message, time.now.call() , res)
});


SendRouter.patch('/' , (req,res,next) => {

    res.status(201).json({
        message: "Patch İsteği Geldi"
    })

})


SendRouter.get('/', (req, res) => {
    res.status(400).json({
        message: "Allowing only POST requests"
    });
})

module.exports = SendRouter;