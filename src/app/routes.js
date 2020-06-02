'use strict';

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());
const post = require('./controllers/postController');
const subscription = require('./controllers/subscriptionController');
const consumption = require('./controllers/ConsumptionController');

app.use('/api/post', post);

app.use('/api/subscription', subscription);

app.use('/api/dailyconsumption', consumption);

module.exports = app;
