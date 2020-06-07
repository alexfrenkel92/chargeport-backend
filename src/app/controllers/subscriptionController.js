'use express';

const express = require('express');
const router = express.Router();
const service = require('../services/subscriptionService');
const emailSender = require('../services/emailService');

router.get('/', async (req, res) => {
  try {
    const getSubscription = await service.getSubscriptionService();
    res.status(200);
    res.send(getSubscription);
  } catch (error) {
    console.log(`Controller error: ${error}`);
    return res.status(400);
  }
});

router.post('/', async (req, res) => {
  const name = req.body.name; // E-mail service gonna use this
  const email = req.body.email; // E-mail service gonna use this

  if (name === '' || email === '') {
    res.status(400).json({ status: 'Missing fields' });
    return;
  }

  try {
    const subscription = await service.postSubscriptionService();
    const subscriptionCorfirmation = await emailSender.emailSender(name, email);
    res.status(201).send(subscription);
    res.status(200).send(subscriptionCorfirmation);
  } catch (error) {
    console.log(`Controller error: ${error}`);
    return res.status(400);
  }
});

router.delete('/', async (req, res) => {
  const subscriberId = req.params.id;
  try {
    const removeSubscription = await service.postSubscriptionService(subscriberId);
    res.status(200);
    res.send(removeSubscription);
  } catch (error) {
    console.log(`Controller error: ${error}`);
    return res.status(400);
  }
});

module.exports = router;
