const config = require('../knexfile')
const knex = require('knex')(config)

knex.migrate.latest([config])
module.exports = knex
/**
 * It is not recommended to use line of code 5, as there may be problems in controlling the migration of the database.
 */