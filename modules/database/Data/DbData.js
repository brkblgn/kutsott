const mongoose = require('mongoose');
const Data = require('../Models/DataSchema')                            //Datamızın Şemasını içeri aktardık

const dbAdress = 'mongodb://localhost/arduino';                 //DataBase'imizin yollunu ve adını verdik

mongoose.connect(dbAdress, {                                     // db bağlantısı
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB Baglanti Hatasi"));
db.once("open", () => {
    console.log("MongoDB Baglantisi Basarili");                 //bağlandık
})


module.exports.kayit = function (UserToken, sensors, time, res) {

    const newData = new Data({                               // veritabanımıza göndereceğimiz data'yı şekillendiriyoruz

        _id: new mongoose.Types.ObjectId(),

        UserToken: UserToken,

        sensors: sensors,

        time: time
    })

    newData.save()  //veritabanına kaydettik 

        .then(KaydedilenData => {
            console.log("Kayit Basarili")


            res.status(201).json({
                message: "Successful",

                Data: KaydedilenData
            })
        }).catch(err => console.log(err))
}

module.exports.sil = function (id, res) {

    Data.remove({ _id: id })
        .exec()
        .then(sonuc => {
            if (sonuc.deletedCount > 0)
                res.status(202).json({
                    message: "Successful",
                    DeletedCount: sonuc.deletedCount
                })
            else
                res.status(200).json({
                    message: "Data couldn't found or already deleted."
                })
        })
        .catch(err => {
            console.log(err);

            res.status(500).json({
                error: err
            })
        })
}