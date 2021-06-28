const schema = require('../Models/DataSchema')
const mongoose = require('mongoose')

module.exports.find = function (token) {

    var model = mongoose.model("Data");

    var sorgu = new Promise(function (resolve, reject) {

        if (token)
            model.findOne({ UserToken: token }, {}, { sort: { 'time': -1 } })       //time değerine göre en yeni değeri çektik
                .exec()
                .then(sonuc => {
                    resolve(sonuc)
                })
                .catch(err => { reject(err) })



        else
            model.find({}, {}, { sort: { 'time': -1 } })                             //time değerine göre en yeni değeri çektik
                .exec()
                .then(sonuc => {
                    resolve(sonuc)
                })
                .catch(err => { reject(err) })


    })

    return sorgu;
}