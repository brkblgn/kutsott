const date = require('date-and-time');

const express = require('express');

var app = express();


// let zaman = new Date().toLocaleDateString('tr-tr') + "-" + new Date().toLocaleTimeString('tr-tr')
// console.log(zaman);


app.get('/', function (req, res) {

    let zaman = new Date().toLocaleDateString('tr-tr') + "-" + new Date().toLocaleTimeString('tr-tr')

    res.send(zaman);


    console.log("Zaman İstendi: " + zaman);
})

if (require.main === module) {      //eğer require() ile çağrıldıysa server baslatmaya gerek yok. o yüzden sadece direk çalıştırılırsa sever baslatılacak.

    app.listen(1884, function () {
        console.log("Zaman Sunucusu Aktif!");
    })

}


module.exports = {
    now: function () {
        let _zaman = new Date().toLocaleDateString('tr-tr') + "-" + new Date().toLocaleTimeString('tr-tr')

        return _zaman;
    }
}
