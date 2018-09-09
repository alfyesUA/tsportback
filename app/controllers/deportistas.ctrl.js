'use strict';

var express = require('express');
var router = express.Router();
var deportistasService = require('../services/deportistas.srv.js');

router.get('/deportistas', (req, res) => {
    deportistasService.getAllDeportistas(function (deportistas){
        res.statusCode = 200;
        res.send(deportistas);
    });
});

module.exports = router;
