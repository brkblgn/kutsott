var mqtt = require('mqtt');

const time = require('./time')

let ip = 'mqtt://kutso.tk'

var client = mqtt.connect(ip, {
  username: "mqtt",
  password: "mqtt",
  port: 1883,
  encoding: "utf8",
  
})


client.on('connect', function () {

  console.log("Mqtt Sunucusuna Bağlandım!");


  //client.subscribe('#') //tüm topiclere sub oluyor


})

client.on('message', function (topic, message) {

  //console.log(JSON.parse(message).veri)


  console.log(`YENİ VERİ (${topic.toString() + " => " + message})`)

  // client.end()
})


module.exports = {
  gonder: function(token, topic, message){

    client.publish(token + "/" + topic , JSON.stringify(message));
    client.publish(token + "/lastPushTime" , time.now.call())
  //  client.end();

  }
}