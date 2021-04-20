const config = require('../knexfile.js')
const knex = require('knex')(config)

knex.migrate.latest([config])
module.exports = knex
/**
 * It is not recommended to use line of code 4, as 
 * there may be problems in controlling the migration of the database.
 * => knex.migrate.latest([config])
 */