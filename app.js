require('log-timestamp');

var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session')

console.log("app: a")
var dbVar = require('./app_api/models/db');
console.log("dbVar")
console.log("app: b")

var indexRouter = require('./app_server/routes/index.route');
var indexApi = require("./app_api/routes/index");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'app_server/views'));
app.set('view engine', 'pug');

app.use("/api", indexApi)
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(session({
    secret:"OdVardaraPaDoTriglava",
    name:"Aggregator-Session-Cookie",
    saveUninitialized: true,
    resave: false,
    cookie:{maxAge:3600000}
}));
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'node_modules','bootstrap','dist','css')));


app.use('/', indexRouter);
app.use("/", indexApi)

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
