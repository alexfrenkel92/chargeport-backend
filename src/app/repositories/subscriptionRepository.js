'use strict';

const db = require('../database');

function getSubscriptionRepository () {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * from subscribers';
    db.conn.query(query, (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
}

function postSubscriptionRepository () {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO subscribers (subscriber) VALUES (?)';
    db.conn.query(query, ['x'], (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
}

function deleteSubscriptionRepository (id) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO subscribers WHERE id = (?)';
    db.conn.query(query, [id], (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
}

module.exports = {
  getSubscriptionRepository: getSubscriptionRepository,
  postSubscriptionRepository: postSubscriptionRepository,
  deleteSubscriptionRepository: deleteSubscriptionRepository
};
