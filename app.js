'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const app = express();

var deportistasController = require('./app/controllers/deportistas.ctrl.js');
var deportesController = require('./app/controllers/deportes.ctrl.js');

const port = 8000;

app.options('*', cors());
app.use(cors());

app.use('/tsport/api', [deportistasController, deportesController]);

app.use('/tsport/api/*', function (req, res, next) {
    next();
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log('TSport back escuchando ' + port);
});
