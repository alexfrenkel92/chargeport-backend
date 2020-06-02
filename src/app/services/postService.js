'use strict';

const repository = require('../repositories/postRepository.js');

async function serviceCreatePost (postTitle, postContent) {
  try {
    const result = await repository.createPost(postTitle, postContent);
    return result;
  } catch (error) {
    console.log(`Service error: ${error}`);
  }
}

async function serviceGetPost () {
  try {
    const result = await repository.getPost();
    return result;
  } catch (error) {
    console.log(`Service error: ${error}`);
  }
}

async function serviceUpVotePost (id) {
  try {
    const result = await repository.upVotePost(id);
    return result;
  } catch (error) {
    console.log(`Service error: ${error}`);
  }
}

async function serviceDownVotePost (id) {
  try {
    const result = await repository.downVotePost(id);
    return result;
  } catch (error) {
    console.log(`Service error: ${error}`);
  }
}

async function serviceDeletePost (id) {
  try {
    const result = await repository.deletePost(id);
    return result;
  } catch (error) {
    console.log(`Service error: ${error}`);
  }
}

async function serviceModifyPost (id, postTitle, postContent) {
  try {
    const result = await repository.modifyPost(id, postTitle, postContent);
    return result;
  } catch (error) {
    console.log(`Service error: ${error}`);
  }
}

module.exports = {
  serviceCreatePost: serviceCreatePost,
  serviceGetPost: serviceGetPost,
  serviceUpVotePost: serviceUpVotePost,
  serviceDownVotePost: serviceDownVotePost,
  serviceDeletePost: serviceDeletePost,
  serviceModifyPost: serviceModifyPost
};
