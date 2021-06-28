const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const DataSchema = new Schema({

    _id : mongoose.Schema.Types.ObjectId,

    UserToken: {
        type: String,
        required: true
    },


    sensors : {
        type : JSON,
        required: true
    },


    time : {
        type : String,
        required: true
    }
});

const Data = mongoose.model("Data" , DataSchema);


module.exports = Data;