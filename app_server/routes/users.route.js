var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users.controller')

/* GET home page. */
router.get('/userID', usersController.userPage);
router.get('/userID/editProfile', usersController.editProfile);
router.post('/userID/editProfile', usersController.editProfilePost);
router.get('/logout', usersController.logout);
router.get('/userID/addPicture',usersController.addPicture);
router.get('/userID/addEmbed',usersController.addEmbed);
router.get('/userID/addText',usersController.addText);
router.post('/userID/addPicture',usersController.addPicturePost);
router.post('/userID/addEmbed',usersController.addEmbedPost);
router.post('/userID/addText',usersController.addTextPost);


module.exports = router;