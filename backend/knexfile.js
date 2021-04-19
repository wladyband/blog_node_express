// Update with your config settings.

module.exports = {

  client: 'mysql',
  connection: {
    database: 'knowledge',
    user: 'root',
    password: 'root'
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    tableName: 'knex_migrations'
  }
};
