'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const post = require('./controllers/postController');
const subscription = require('./controllers/subscriptionController');
const consumption = require('./controllers/ConsumptionController');
const products = require('./controllers/productsController');

app.use('/api/post', post);

app.use('/api/subscription', subscription);

app.use('/api/consumption', consumption);

app.use('/api/products', products);

module.exports = app;
