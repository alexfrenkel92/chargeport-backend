'use strict';

const repository = require('../repositories/postRepository.js');

async function serviceCreatePost (post_title, post_url) {
    try {
        const result = await repository.createPost(post_title, post_url);
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

module.exports = {
    serviceCreatePost: serviceCreatePost,
    serviceGetPost: serviceGetPost
}