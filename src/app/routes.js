'use strict';

const express = require('express');
const app = express();
const router = express.Router();
const post = require('./controllers/postController');
// const cors = require('cors');
// app.use(cors());
app.use(express.json());

app.use('/api/post', post);

// app.use('/', router);

module.exports = app;
