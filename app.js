var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var MongoDB = require('mongodb')

var indexRouter = require('./routes/index');
var userRouter = require('./routes/users')


var app = express();

// view engine setup
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session配置
app.use(session({
  secret: 'carlos',
  resave: false,
  saveUninitialized: true,
  cookie: { maxAge: 1000 * 60 },   // 指定登录会话的有效时长
  rolling: true,
  // store: new MongoDB({
  //   url: "mongodb://localhost:12701"
  // })
}))

// 登录拦截
// app.get('*', (req, res, next) => {
//   const username = req.session.user_id 
//   const path = req.path
//   if (path !== '/login' || path !== '/register') {
//     if (!username) {
//       res.redirect('/login')
//       return
//     }
//   } 
//   next()
// })


app.use('/', indexRouter);
app.use('/user', userRouter)



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
