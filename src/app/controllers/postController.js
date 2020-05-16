'use strict';

const express = require('express');
const router = express.Router();
const postService = require('../services/postService.js');

router.post('/', async (req, res) => {
    const title = req.body.post_title;
    const url = req.body.post_url;

    // if (post_title === '' || post_url === '') {
    //     res.status(400).json({ status: 'Missing fields' });
    //     return;
    // }

    try {
        const post = await postService.serviceCreatePost(title, url);
        res.status(201);
        res.send(post);
    } catch (err) {
        console.log(`Post failed: ${err}`);
        return res.status(400);
    }
})

router.get('/', async (req, res) => {
    try {
        const posts = await postService.serviceGetPost();
        res.status(200);
        res.send(posts)
    } catch (error) {
        console.log(`Controller error: ${error}`);
        return res.status(400);
    }
})

module.exports = router;