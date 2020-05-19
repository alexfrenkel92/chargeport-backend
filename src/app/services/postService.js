'use strict';

const repository = require('../repositories/postRepository.js');

async function serviceCreatePost(post_title, post_content) {
  try {
    const result = await repository.createPost(post_title,  post_content);
    return result;
  } catch (error) {
    console.log(`Service error: ${error}`);
  }
}

async function serviceGetPost() {
  try {
    const result = await repository.getPost();
    return result;
  } catch (error) {
    console.log(`Service error: ${error}`);
  }
}

async function serviceUpVotePost(id) {
    try {
        const result = await repository.upVotePost(id);
        return result;
    } catch (error) {
        console.log(`Service error: ${error}`);
    }
}

async function serviceDownVotePost(id) {
    try {
        const result = await repository.downVotePost(id);
        return result;
    } catch (error) {
        console.log(`Service error: ${error}`);
    }
}

module.exports = {
  serviceCreatePost: serviceCreatePost,
  serviceGetPost: serviceGetPost,
  serviceUpVotePost: serviceUpVotePost,
  serviceDownVotePost: serviceDownVotePost
};
