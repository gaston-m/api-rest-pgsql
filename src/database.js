const { Pool } = require('pg');
const { database } = require('./keys');

const pool = new Pool (database);

pool.connect()
    .then( client => {
        client.release();
        console.log('Conected to PostgreSQL');
    })
    .catch(err => console.error(err));

module.exports = pool;
