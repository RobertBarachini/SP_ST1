var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users.controller')

/* GET home page. */
router.get('/userID', usersController.userPage);
router.get('/userID/editProfile', usersController.editProfile);
router.post('/userID/editProfile', usersController.editProfilePost);
router.get('/logout', usersController.logout);


module.exports = router;