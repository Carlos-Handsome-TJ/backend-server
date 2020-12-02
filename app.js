var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var mongoose = require('mongoose');
var multer = require("multer")
var indexRouter = require('./routes/index');
var userRouter = require('./routes/users')
var articleRouter = require('./routes/articles')

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser('ggffdaasadada123ghgfhf8gghgh'));
app.use(express.static(path.join(__dirname, 'public')));

// session配置
app.use(session({
  secret: 'carlos_handsome_TJ',
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    maxAge: 1000 * 60 * 60 * 60 * 1//保存一小时
  },   // 指定登录会话的有效时长
  rolling: true,
  // store: new MongoDB({
  //   url: "mongodb://localhost:12701"
  // })
}))
// 登录拦截
app.get('*', (req, res, next) => {
  console.log(req.session)
  console.log(req.session.user_id)
  if (path !== '/list/login' || path !== '/list/register') {
    if (!req.session.user_id) {
      //未授权，返回401状态码：
      res.status(401)
    }
  }
  next()
})


app.use('/', indexRouter);
app.use('/user', userRouter)
app.use('/list', articleRouter)

// 设置默认 mongoose 连接
mongoose.connect(
  'mongodb://127.0.0.1:27017/project',
  { useNewUrlParser: true },
  (err, data) => {
      if (err) throw err
      console.log("数据库连接成功！")
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
