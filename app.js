require('dotenv').load();
require('log-timestamp');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
//var indexRouter = require('./app_server/routes/index.route');
var usersRouter = require('./app_server/routes/users.route');
var postsRouter = require('./app_server/routes/posts.route');
var bodyParser = require('body-parser');



var uglifyJs = require('uglify-js');
var fs = require('fs');
var zdruzeno = uglifyJs.minify({
  'app.js': fs.readFileSync('app_client/app.js', 'utf-8'),
  'index.controller.js' : fs.readFileSync('app_client/components/index.controller.js', 'utf-8'),
  'glava.controller.js' : fs.readFileSync('app_client/layout/glava/glava.controller.js', 'utf-8'),
  'post.controller.js' : fs.readFileSync('app_client/posts/post.controller.js', 'utf-8'),
  'users.services.js' : fs.readFileSync('app_client/services/users.services.js', 'utf-8'),
  'user.controller.js' : fs.readFileSync('app_client/users/user.controller.js', 'utf-8'),
  'login.controller.js' : fs.readFileSync('app_client/login/login.controller.js', 'utf-8'),
  'register.controller.js' : fs.readFileSync('app_client/register/register.controller.js', 'utf-8'),
  'usersIdentity.services.js' : fs.readFileSync('app_client/services/usersIdentity.services.js', 'utf-8'),
  'addPost.controller.js' : fs.readFileSync('app_client/modalnaOkna/addPost/addPost.controller.js', 'utf-8'),
  'addPosts.controller.js' : fs.readFileSync('app_client/addPosts/addPosts.controller.js', 'utf-8'),
  'editProfile.controller.js' : fs.readFileSync('app_client/editProfile/editProfile.controller.js', 'utf-8'),
  'editPost.controller.js' : fs.readFileSync('app_client/posts/editPost.controller.js', 'utf-8'),
  'posts.services.js' : fs.readFileSync('app_client/services/posts.services.js', 'utf-8'),
  'users.services.js' : fs.readFileSync('app_client/services/users.services.js', 'utf-8'),
  'usersIdentity.services.js' : fs.readFileSync('app_client/services/usersIdentity.services.js', 'utf-8'),
  'auth.services.js' : fs.readFileSync('app_client/services/auth.services.js', 'utf-8'),
  'dbt.controller.js' : fs.readFileSync('app_client/dbt/dbt.controller.js', 'utf-8')
});
fs.writeFile('public/angular/aggApp.min.js', zdruzeno.code, function(napaka) {
  if (napaka)
    console.log(napaka);
  else
    console.log('Skripta je zgenerirana in shranjena v "aggApp.min.js".');
});


console.log("app: a");
var dbVar = require('./app_api/models/db');
require('./app_api/config/passport');
console.log("dbVar");
console.log("app: b")

var indexApi = require("./app_api/routes/index");



var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'pug');

//app.use(bodyParser.urlencoded({ extended: false }));
//app.use(bodyParser.json());


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


app.use(session({
    secret:"user_sid",
    name:"Aggregator-Session-Cookie",
    saveUninitialized: true,
    resave: false,
    cookie:{maxAge:3600000}
}));
app.use((req, res, next) => {
    if (req.cookies.user_sid && !req.session.user) {
        res.clearCookie('user_sid');        
    }
    next();
});


app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules','bootstrap','dist','css')));
app.use(express.static(path.join(__dirname, 'app_client')));


//passport
app.use(passport.initialize());
app.use(passport.session());

// Obvladovanje napak zaradi avtentikacije
app.use(function(err, req, res, next) {
  if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({
      "sporočilo": err.name + ": " + err.message
    });
  }
});

//Login ses
/*app.get('*',function (req,res,next) {
    res.locals.user  = req.user || null;
    next();
});*/

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())
//app.use('/', indexRouter);
//app.use('/users', usersRouter);
//app.use('/posts', postsRouter);


app.use("/api", indexApi)
app.use("/userIdenty", indexApi);

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, 'app_client', 'index.html'));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
