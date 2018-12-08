var express = require('express');
var router = express.Router();
var usersController = require('../controllers/users.controller')

/* GET home page. */
router.get('/name', usersController.userPage);


module.exports = router;