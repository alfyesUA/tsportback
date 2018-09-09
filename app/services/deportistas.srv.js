'use strict';

const deportistasJson = require('../../assets/deportistas.json');

module.exports.getAllDeportistas = function (success, error) {
    success(deportistasJson);
}