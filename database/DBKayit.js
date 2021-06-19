const mongoose = require('mongoose');
const Data = require('./DataSchema')

mongoose.connect('mongodb://localhost/datas', {
    useNewUrlParser: true
});

const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB Baglanti Hatasi"));
db.once("open", () => {
    console.log("MongoDB Baglantisi Basarili");
})


module.exports.kayit = function (token , sensors, time) {

    //if(sensorDatas.length <= 0) return -1;

    const newData = new Data({
        token,
        sensors,
        time
    })

    newData.save()
    .then(() => {
        console.log("Kayit Basarili")
    }).catch(err => console.log(err))
}