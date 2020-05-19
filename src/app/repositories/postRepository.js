'use strict';

const db = require('../database.js');

function createPost (post_title, post_content) {
  return new Promise((resolve, reject) => {
    const query = 'INSERT INTO posts (post_title,  post_content, post_timestamp) VALUES (?,?,?)';
    db.conn.query(query, [post_title, post_content, Date.now()], (error, rows) => {
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

function upVotePost (id) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE posts SET score = score + 1 WHERE id = ${id}`;
    db.conn.query(query, (error, rows) => {
      if (error) {
        return reject(error);
      }
      return resolve(rows);
    });
  });
}

function downVotePost (id) {
  return new Promise((resolve, reject) => {
    const query = `UPDATE posts SET score = GREATEST (score - 1, 0) WHERE id = ${id}`; // GREATEST & 0 megakadalyozza, hogy 0 ala menjen a score
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
  getPost: getPost,
  upVotePost: upVotePost,
  downVotePost: downVotePost
};
