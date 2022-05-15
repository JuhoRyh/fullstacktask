/* eslint-disable global-require */
require('dotenv').config();

const create = async () => {
  const { Client } = require('pg');
  const client = new Client({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: 'postgres',
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
  });

  console.log('Connecting to database "postgres"...');

  await client.connect();

  console.log(`Creating database ${process.env.DB_NAME}...`);
  client.query(`CREATE DATABASE ${process.env.DB_NAME}`, (err, res) => {
    if (err) {
      throw err;
    }

    console.log(`Created database ${process.env.DB_NAME}`, res);
    client.end();
  });
};

create();
