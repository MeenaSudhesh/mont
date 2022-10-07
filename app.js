'use strict'


var createError = require('http-errors');
const router = require('./src/routes');
// require('dotenv').config();
const bodyParser = require('body-parser');
const express = require('express')
var path = require('path');


const app = express()
require('./db/index');

// require('./db/knexfile');
//initialize knex
// const knex = require('knex')
app.use(bodyParser.json())
app.disable('x-powered-by')
global.responseHelper = require('./src/helpers/responseHelper');
const port = 2021;

app.use('/api/v1',router)
app.get('/', (req, res) => {
  
  responseHelper.success(res, 'Health Check Success');
  /* #swagger.responses[200] = { schema: { "$ref": "#/definitions/successRes" }, "description": "Successfully Fetched!" }*/
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// knex.raw("SELECT VERSION()").then(
//     (version) => console.log((version[0][0]))
// ).catch((err) => { console.log("error2", err); throw err })
//     .finally(() => {
//         knex.destroy();
//     });

module.exports = app;
