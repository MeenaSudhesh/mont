
const { Model } = require('objection');
const knex = require('knex');
const knexConnection = require('./knexfile')
// console.log("knexConnection",knexConnection);
const knexDB = knex(knexConnection);
knexDB
  .raw('select 1+1 as result')
  .then(_ => {
    console.log('DB connected')
  })
  .catch(e => {
    console.log(e)
    process.exit(1)
  })

Model.knex(knexDB);

module.exports = knexDB;
