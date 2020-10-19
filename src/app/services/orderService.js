const repository = require('../repositories/orderRepository.js');

async function servicePostOrders(productId, productName, productPrice, productCount) {
    try {
        const result = await repository.postOrders(productId, productName, productPrice, productCount);
        return result;
    } catch (error) {
        console.log(`Service error: ${error}`);
    }
}

async function serviceGetOrders() {
    try {
        const result = await repository.getOrders();
        return result;
    } catch (error) {
        console.log(`Service error: ${error}`);
    }
}

module.exports = {
    servicePostOrders: servicePostOrders,
    serviceGetOrders: serviceGetOrders
}