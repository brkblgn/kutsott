const express = require("express")

const TimeRouter = express.Router();


var time = require('../modules/time');


TimeRouter.get("/", function (req, res) {

    res.status(200).send(time.now.call());

});

TimeRouter.post("/", function (req, res) {

    res.status(200).send(time.now.call());
});

module.exports = TimeRouter;