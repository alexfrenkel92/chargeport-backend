'use strict';

const db = require('../database');

function consumptionAC36 () {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM consumption_ac36 ORDER BY id DESC LIMIT 1;'; // selects the last row
    db.conn.query(query, (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
}

function consumptionAC22 () {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM consumption_ac22 ORDER BY id DESC LIMIT 1;'; // selects the last row
    db.conn.query(query, (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
}

function consumptionDC50 () {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM consumption_dc50 ORDER BY id DESC LIMIT 1;'; // selects the last row
    db.conn.query(query, (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
}

module.exports = {
  consumptionAC36: consumptionAC36,
  consumptionAC22: consumptionAC22,
  consumptionDC50: consumptionDC50
};
