const pgp = require('pg-promise')();

// const connection = 'postgres://localhost:5432/wiki_page';

const database = pgp(process.env.DATABASE_URL || {
  host: 'localhost',
  port: 5432,
  database: 'wiki_page'
});



module.exports = database;
