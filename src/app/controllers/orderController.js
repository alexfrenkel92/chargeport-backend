const express = require('express');
const router = express.Router();
const orderService = require('../services/orderService.js');

router.post('/', async (req, res) => {

    let productId = null
    let productName = null;
    let productPrice = null;
    let productCount = null;

    req.body.cartItems.map(order => {
        console.log(order)
        productId = order.id;
        productName = order.name;
        productPrice = order.price;
        productCount = order.count

        if (productId === '' || productCount === '' || productName === '' || productPrice === '') {
            res.status(400).json({ status: 'Missing fields' });
            return;
        }
    
        try {
            const post = orderService.servicePostOrders(productId, productName, productPrice, productCount);
            // res.status(201);
            res.send(post);
        } 
        catch (err) {
            console.log(`Post failed: ${err}`);
            return res.status(400);
        }
    })
});

router.get('/', async (req, res) => {
    try {
        const posts = await orderService.serviceGetOrders();
        res.status(200);
        res.send(posts);
    } catch (error) {
        console.log(`Controller error: ${error}`);
        return res.status(400);
    }
});

module.exports = router;
