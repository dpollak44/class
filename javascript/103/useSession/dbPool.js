var debug = require('debug')('usesession:pool');
const mysql = require('mysql');

const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'localhost',
    user: 'nodeuser3',//process.env.dbuser,
    password: 'test123',//process.env.dbpassword,
    database: 'nodeuser3'
});

module.exports = pool;