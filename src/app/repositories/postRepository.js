'use strict';

const db = require('../database.js');

function createPost (post_title, post_url) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO posts (post_title, post_url, post_timestamp) VALUES (?,?,?)';
    db.conn.query(query, [post_title, post_url, Date.now()], (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
}

function getPost () {
  return new Promise((resolve, reject) => {
    const query = 'SELECT * FROM posts';
    db.conn.query(query, (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
}

module.exports = {
  createPost: createPost,
  getPost: getPost
};
