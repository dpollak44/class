var createError = require('http-errors');
var express = require('express');
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//app.use(cookieParser());

app.use(session({
  secret: 'mySecret',
  cookie: {
    maxAge: 20000//,
    //secure: true
  },
  resave: false,
  saveUninitialized: false
}));

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) => {
  res.locals.user = req.session.user;
  next();
});

app.use('/', indexRouter);
app.use('/users', usersRouter);

app.get('/pageCount', (req, res, next) => {
  if (req.session.pageCount) {
    res.end(`You have visited the page ${++req.session.pageCount} times`);
  } else {
    req.session.pageCount = 1;
    res.end('This is your first time visiting the page');
  }
});

app.use('/register', require('./routes/register'));

app.post('/login', require('./login'));

app.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.redirect('/');
});

const sessionOnlyMiddleware = (req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect('/');
  }
};

app.get('/topSecret', [sessionOnlyMiddleware], (req, res, next) => {
  res.render('layout', { partials: { content: 'topSecret' } });
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('layout', { title: 'Express', partials: { content: 'index' } });
});

app.locals.appTitle = 'PCS Session App';
module.exports = app;
