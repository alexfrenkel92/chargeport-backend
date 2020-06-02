'use strict';

const repository = require('../repositories/ConsumptionRep');

async function consumptionAC36Service () {
  try {
    const result = await repository.consumptionAC36();
    return result;
  } catch (error) {
    console.log(`Service error: ${error}`);
  }
}

async function consumptionAC22Service () {
  try {
    const result = await repository.consumptionAC22();
    return result;
  } catch (error) {
    console.log(`Service error: ${error}`);
  }
}

async function consumptionDC50Service () {
  try {
    const result = await repository.consumptionDC50();
    return result;
  } catch (error) {
    console.log(`Service error: ${error}`);
  }
}

module.exports = {
  consumptionAC36Service: consumptionAC36Service,
  consumptionAC22Service: consumptionAC22Service,
  consumptionDC50Service: consumptionDC50Service
};
