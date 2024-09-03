const { Client } = require('pg');

const client = new Client({
  user: 'kemre',
  host: 'localhost',
  database: '\c lunchly',
  password: 'kemi', // Ensure this is a string
  port: 5432,
});

client.connect();
