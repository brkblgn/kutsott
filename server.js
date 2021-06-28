const express = require("express");
const morgan = require('morgan')
var app = express();

var serverPort = process.argv[2] || 80                   //sunucumuzun portunu belirttik

const Controller = require('./Controllers/Controller')

app.use(express.static(__dirname + '/')); 

app.use(express.json());                                //json kullanacağız

app.use(morgan('dev'));

app.use(Controller);                                    //Controller i içeri aktardık. Kalabalık olmaması için istekleri orada yöneteceğiz


app.listen(serverPort, function () {                     //server başlatılıyor
    console.log(`Server Başlatıldı! (${serverPort})`); 
})
