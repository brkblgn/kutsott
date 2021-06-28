const express = require('express')

let router = express.Router();

const PageController = require('./PageController');     // Gelen Sayfa İstekleri İçin Kontrollerimiz

const ReqController = require('./ReqController');       // Gelen İstekler İçin Kontrollerimiz

router.use(ReqController);

router.use(PageController);


router.use((req,res,next) => {
    res.header('Access-Control-Allow-Origin' , '*');
    next();
})

module.exports = router;