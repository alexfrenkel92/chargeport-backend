'use strict';

// const path = require('path');
// require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
// require('dotenv').config()
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'sql7.freemysqlhosting.net',
  user: 'sql7345884',
  password: 'wCtpfCWpim',
  database: 'sql7345884'
});

async function connectToDatabase () {
  try {
    await conn.connect(() => {
      console.log('Database connected');
    });
  } catch (err) {
    console.log(`Database connection failed: ${err}`);
  }
}

connectToDatabase();

exports.connectToDatabase = connectToDatabase;
exports.conn = conn;
