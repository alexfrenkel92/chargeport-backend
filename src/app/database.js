'use strict';

const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '../.env') });
const mysql = require('mysql');

const conn = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME
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
