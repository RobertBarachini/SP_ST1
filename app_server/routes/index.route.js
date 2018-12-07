var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.controller')

/* GET home page. */
router.get('/', indexController.indexPage);
router.get('/login', indexController.loginPage)
//router.post('/login', indexController.loginPagePost)
router.get('/register', indexController.registerPage)
router.get('/postID', indexController.postID)

module.exports = router;
