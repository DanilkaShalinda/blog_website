const express = require('express');
const Posts = require('../models/posts');
const router = express.Router();
const postController = require('../controllers/postController');

//posts CRUDS
router.post('/post/save',postController.savePost);
router.delete('/post/delete/:id',postController.deletePost);
router.get('/posts',postController.getAllPosts);
router.put('/post/update/:id', postController.updatePost);




module.exports= router;