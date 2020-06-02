'use strict';

const express = require('express');
const router = express.Router();
const postService = require('../services/postService.js');

router.post('/', async (req, res) => {
  const postTitle = req.body.post_title;
  const postContent = req.body.post_content;

  if (postTitle === '' || postContent === '') {
    res.status(400).json({ status: 'Missing fields' });
    return;
  }

  try {
    const post = await postService.serviceCreatePost(postTitle, postContent);
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

router.delete('/delete/:id', async (req, res) => {
  const id = req.params.id;
  try {
    const deletePost = await postService.serviceDeletePost(id);
    res.status(200).send(deletePost);
  } catch (error) {
    console.log(`Controller error: ${error}`);
    return res.status(400);
  }
});

router.put('/modify/:id', async (req, res) => {
  const id = req.params.id;
  const postTitle = req.body.post_title;
  const postContent = req.body.post_content;

  if (postTitle === '' || postContent === '') {
    res.status(400).json({ status: 'Missing fields' });
    return;
  }

  try {
    const modifyPost = await postService.serviceModifyPost(postTitle, postContent, id);
    res.status(200).send(modifyPost);
  } catch (error) {
    if (error.message === '404') {
      res.status(404).json({ error: 'Not found' });
    } else { console.log(`Controller error: ${error}`); }
    return res.status(500);
  }
});

module.exports = router;
