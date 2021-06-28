const express = require("express")

const router = express.Router();

let folder = "/api/";

var TimeRouter = require('../routers/time')
var SendRouter = require('../routers/send');
var RemoveRouter = require('../routers/remove')

var getData = require('../modules/database/Data/GetData')       //Veritabanından veri çekmek için kullanılacak kodu içeri aktardık

router.use(folder + "time", TimeRouter);
router.use(folder + "send", SendRouter);
router.use(folder + "delete", RemoveRouter);

router.get(folder + "find", (req, res) => {

    getData.find().then((cevap) => {

        //  if (cevap.length >= 0)

        cevap = JSON.stringify( cevap );

        res.status(200).send( {result: cevap} )
        /*    else
                res.status(404).json({ message: "No entries found" })*/

    })

})

router.get(folder + "find/:token", (req, res) => {


    let token = req.params.token;

    getData.find(token).then((cevap) => {

        //  if (cevap.length >= 0)
        res.status(200).send(cevap)
        /*    else
                res.status(404).json({ message: "No entries found" })*/

    })

})

module.exports = router;