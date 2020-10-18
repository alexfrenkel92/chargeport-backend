const express = require('express');
const router = express.Router();
const productService = require('../services/productsService.js');

router.get('/', async (req, res) => {
    try {
        const posts = await productService.serviceGetProducts();
        res.status(200);
        res.send(posts);
    } catch (error) {
        console.log(`Controller error: ${error}`);
        return res.status(400);
    }
});

module.exports = router;
