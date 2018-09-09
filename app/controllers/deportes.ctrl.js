'use strict';

var express = require('express');
var router = express.Router();
var deportesService = require('../services/deportes.srv.js');

router.get('/deportes', function(req, res){
    deportesService.getAllDeportes(function(deportes){
        res.statusCode = 200;
        res.send(deportes);
    });
});

module.exports = router;
