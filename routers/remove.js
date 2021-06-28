const express = require("express");

const RemoveRouter = express.Router();

const DbData = require('../modules/database/Data/DbData');

RemoveRouter.delete('/:id' , (req,res,next) => {

    let id = req.params.id;

    DbData.sil(id , res);

})


module.exports = RemoveRouter;