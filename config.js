const pg = require('pg');
require('dotenv').config();

const client = new pg.Client({
  user: process.env.USER,
  host: process.env.HOST,
  database: 'postgres',
  password: process.env.PASSWORD,
  port: 5432,
});

client.connect((err) => {
  if (err) {
    console.error('Connection error', err.stack);
  } else {
    console.log('Connected to Database');
  }
});

module.exports = { client };
