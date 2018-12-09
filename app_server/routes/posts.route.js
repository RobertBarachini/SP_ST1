var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts.controller')

/* GET home page. */
router.get('/postID', postsController.postPage);
router.get('/postID/editPost', postsController.editPost);


module.exports = router;