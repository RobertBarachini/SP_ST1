var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.controller')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', indexController.indexPage);
router.post('/', indexController.indexPagePost);
router.get('/login', indexController.loginPage)
router.post('/login',indexController.loginPagePost)
router.get('/register' ,indexController.registerPage)
router.post('/register',indexController.registerPagePost)


module.exports = router;
