const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({

    token: {
        type: String,
        required: true
    },

    name: {
        type: String,
        required: true
    },

    surname: {
        type: String,
        required: true
    },

    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

    proUyelik: {
        type: Boolean,
        required: true,
        default: false
    }
   
});

const User = mongoose.model("User" , UserSchema);


module.exports = User;