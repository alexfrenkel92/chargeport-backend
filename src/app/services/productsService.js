const repository = require('../repositories/productsRepository.js');

async function serviceGetProducts() {
    try {
        const result = await repository.getProducts();
        return result;
    } catch (error) {
        console.log(`Service error: ${error}`);
    }
}

module.exports = {
    serviceGetProducts: serviceGetProducts
};