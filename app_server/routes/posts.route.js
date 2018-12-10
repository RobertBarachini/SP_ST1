var express = require('express');
var router = express.Router();
var postsController = require('../controllers/posts.controller')

/* GET home page. */
router.get('/:postID', postsController.postPage);
<<<<<<< HEAD
router.delete('/:postID', postsController.deletePost)
router.get('/:postID/editPost', postsController.editPost);
router.post('/:postID/editPost', postsController.editPostPost);
router.post('/:postID', postsController.addComment)
=======
router.post('/delete/:postID', postsController.deletePost)
router.get('/postID/editPost', postsController.editPost);
router.post('/postID/editPost', postsController.editPostPost);
router.post('/postID', postsController.addComment)
>>>>>>> d9d8c5a7e4318b60e50f8f1abb66f745b6550d1d



module.exports = router;