'use strict';

const deportesJson = require('../../assets/deportes.json');

module.exports.getAllDeportes = function (success, error) {
    success(deportesJson);
}