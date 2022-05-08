const pg = require('pg');

const PG_DECIMAL_OID = 1700;
pg.types.setTypeParser(PG_DECIMAL_OID, parseFloat);
const environment = process.env.ENVIRONMENT || 'development';
const config = require('../knexfile')[environment];
module.exports = require('knex')(config);
