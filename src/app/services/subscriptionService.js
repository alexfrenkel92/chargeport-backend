'use strict';

const repository = require('../repositories/subscriptionRepository');

async function getSubscriptionService () {
  try {
    const result = await repository.getSubscriptionRepository();
    return result;
  } catch (error) {
    console.log(`Service erro: ${error}`);
  }
}

async function postSubscriptionService () {
  try {
    const result = await repository.postSubscriptionRepository();
    return result;
  } catch (error) {
    console.log(`Service erro: ${error}`);
  }
}

async function deleteSubscriptionService (id) {
  try {
    const result = await repository.deleteSubscriptionRepository(id);
    return result;
  } catch (error) {
    console.log(`Service erro: ${error}`);
  }
}

module.exports = {
  getSubscriptionService: getSubscriptionService,
  postSubscriptionService: postSubscriptionService,
  deleteSubscriptionService: deleteSubscriptionService
};
