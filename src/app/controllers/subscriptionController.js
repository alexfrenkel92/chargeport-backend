'use express';

const express = require('express');
const router = express.Router();
const service = require('../services/subscriptionService');

router.post('/', async (req, res) => {
    const subscriber_name = req.body.name; //E-mail service gonna use this
    const subscriber_emial = req.body.email; //E-mail service gonna use this
    try {
        const subscription = await service.postSubscriptionService();
        res.status(200);
        res.send(subscription);
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