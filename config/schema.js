const pgp = require('pg-promise')();

const connection = 'postgres://localhost:5432/wiki_page';

const database = pgp(connection);

module.exports = database;
