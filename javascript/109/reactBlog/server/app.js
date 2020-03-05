const express = require('express');
const app = express();

const socketIo = require('socket.io');
const mongoose = require('mongoose');

const session = require('express-session');
app.use(session({
  secret: 'mySecret',
  cookie: {
    //maxAge: 20000//,
    //secure: true
  },
  resave: false,
  saveUninitialized: false
}));

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const path = require('path');
app.use(express.static(path.join(__dirname, 'build')));

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use('/', require('./routes/authentication'));
app.use('/posts', require('./routes/posts'));

/*app.use((req, res, next) => {
  const err = new Error('No such API method');
  err.status = 404;
  next(err);
});*/
app.get('*', (req, res, next) => {
  res.sendFile(path.join(__dirname, 'build/index.html'));
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'oops');
});

async function connectToMongo() {
  mongoose.connect('mongodb://localhost:27017/blog2', { useNewUrlParser: true, useUnifiedTopology: true });

  const db = mongoose.connection;
  db.on('error', err => console.error('connection error:', err));
  db.once('open', function () {
    console.log('connected');
  });
}

connectToMongo().catch(e => console.error(e));

app.locals.io = socketIo.listen(app.listen(80));