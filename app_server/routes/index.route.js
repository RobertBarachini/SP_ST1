var express = require('express');
var router = express.Router();
var indexController = require('../controllers/index.controller')
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;

/* GET home page. */
router.get('/', indexController.indexPage);
router.get('/login', indexController.loginPage)
router.post('/login',indexController.loginPagePost)
router.get('/register' ,indexController.registerPage)
router.post('/register',indexController.registerPagePost)

/* passport.use(new LocalStrategy(function(username,password,done){
    if (username === 'Deki' && password === 'sp') {
        return done(null,true)
    }
    else return done(null,false,{message:'Invalid u or p'});

})); */

module.exports = router;
