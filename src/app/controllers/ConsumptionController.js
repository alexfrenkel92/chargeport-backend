'use strict';

const express = require('express');
const router = express.Router();
const service = require('../services/ConsumptionService');

router.get('/ac36', async (req, res) => {
  try {
    const consumption = await service.consumptionAC36Service();
    res.status(200).send(consumption);
  } catch (error) {
    return res.status(400);
  }
});

router.get('/ac22', async (req, res) => {
  try {
    const consumption = await service.consumptionAC22Service();
    res.status(200).send(consumption);
  } catch (error) {
    return res.status(400);
  }
});

router.get('/dc50', async (req, res) => {
  try {
    const consumption = await service.consumptionDC50Service();
    res.status(200).send(consumption);
  } catch (error) {
    return res.status(400);
  }
});

module.exports = router;
