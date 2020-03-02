const express = require('express');
const app = express();

const socketIo = require('socket.io');
const mongo = require('mongodb');

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

app.use(require('cors')({
  origin: 'http://localhost:3000',
  credentials: true
}));
/*app.use((req, res, next) => {
  //res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  next();
});*/

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use('/', require('./routes/authentication'));
app.use('/posts', require('./routes/posts'));

app.use((req, res, next) => {
  const err = new Error('No such API method');
  err.status = 404;
  next(err);
});

app.use((err, req, res, next) => {
  res.status(err.status || 500).send(err.message || 'oops');
});

async function connectToMongo() {
  const client = new mongo.MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db('blog');
    app.locals.posts = db.collection('posts');
    app.locals.users = db.collection('users');

    app.locals.numPosts = await app.locals.posts.countDocuments();
  } catch (err) {
    console.error(err);
  }
}

connectToMongo().catch(e => console.error(e));

app.locals.io = socketIo.listen(app.listen(80));