require('dotenv').config();

const knexConfig = {
  client: 'pg',
  connection: {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
  },
  pool: {
    min: 2,
    max: 10,
  },
  migrations: {
    tableName: 'knex_migrations',
    directory: `${__dirname}/db/migrations`,
  },
  seeds: {
    directory: `${__dirname}/db/seeds/development`,
  },
  debug: false,
};

module.exports = {
  development: knexConfig,
  production: {
    ...knexConfig,
    seeds: {
      directory: `${__dirname}/db/seeds/production`,
    },
  },
};
