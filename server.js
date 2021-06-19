const express = require("express");

const https = require('https');

var app = express();

var serverPort = process.argv[2] || 80

const Controller = require ('./Controller')

//app.use(express.static(__dirname + '/')); 

app.use(express.json());

app.use(Controller);


app.listen(serverPort, function () {
    console.log(`Server Başlatıldı! (${serverPort})`);
})
