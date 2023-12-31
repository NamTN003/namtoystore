var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var toyRouter = require('./routes/toy');
var hammerRouter = require('./routes/hammer');
var spindleRouter = require('./routes/spindle');

var app = express();



var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: false}));

// khai bao mongoose
var mongoose = require('mongoose');
mongoose.set('strictQuery', true)
var uri = 'mongodb+srv://namntgch211249:Namsaker003@cluster0.mmqs9zq.mongodb.net/toy';
mongoose.connect(uri)
.then(()=>console.log('are you oke'))
.catch((err)=> console.log('error'))

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/toy', toyRouter);
app.use('/hammer', hammerRouter);
app.use('/spindle', spindleRouter);


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

//cau hinh Port cua sever de imploy len cloud
app.listen(process.env.PORT || 2003);

module.exports = app;
