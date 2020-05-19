'use strict';

const express = require('express');
const router = express.Router();
const postService = require('../services/postService.js');

router.post('/', async (req, res) => {
  const post_title = req.body.post_title;
  const post_content = req.body.post_content;

  if (post_title === '' || post_content === '') {
    res.status(400).json({ status: 'Missing fields' });
    return;
  }

  try {
    const post = await postService.serviceCreatePost(post_title, post_content);
    res.status(201);
    res.send(post);
  } catch (err) {
    console.log(`Post failed: ${err}`);
    return res.status(400);
  }
});

router.get('/', async (req, res) => {
  try {
    const posts = await postService.serviceGetPost();
    res.status(200);
    res.send(posts);
  } catch (error) {
    console.log(`Controller error: ${error}`);
    return res.status(400);
  }
});

router.put('/upvote/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const upVote = await postService.serviceUpVotePost(id);
    res.status(200);
    res.send(upVote);
  } catch (error) {
    console.log(`Controller error: ${error}`);
    return res.status(400);
  }
});

router.put('/downvote/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const downVote = await postService.serviceDownVotePost(id);
    res.status(200).send(downVote);
  } catch (error) {
    console.log(`Controller error: ${error}`);
    return res.status(400);
  }
});

module.exports = router;
