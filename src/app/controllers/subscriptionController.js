'use express';

const express = require('express');
const router = express.Router();
const service = require('../services/subscriptionService');
const emailSender = require('../services/emailService');

router.post('/', async (req, res) => {
    const name = req.body.name; //E-mail service gonna use this
    const email = req.body.email; //E-mail service gonna use this

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
})

router.delete('/', async (req, res) => {
    const subscriber_id = req.params.id;
    try {
        const remove_subscription = await service.postSubscriptionService(subscriber_id);
        res.status(200);
        res.send(remove_subscription);
    } catch (error) {
        console.log(`Controller error: ${error}`);
        return res.status(400);
    }
})

module.exports = router;