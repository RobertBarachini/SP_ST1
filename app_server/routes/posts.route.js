var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts.controller')

/* GET home page. */
router.get('/:postID', postsController.postPage);


module.exports = router;