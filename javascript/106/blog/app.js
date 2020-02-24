const express = require('express');
const app = express();

const socketIo = require('socket.io');
const mongo = require('mongodb');

var path = require('path');
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hjs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

app.locals.title = 'PCS Mongo Express Socket.IO Blog';
let posts;
let io;

app.get('/', async (req, res, next) => {
  try {
    const thePosts = await posts.find().toArray();

    thePosts.forEach(p => p.date = p.date.toLocaleString());

    res.render('layout', {
      subtitle: 'Welcome to the blog',
      posts: thePosts,
      links: [{ url: '/addPost', text: 'Add Post' }],
      css: ['posts'],
      scripts: ['posts'],
      partials: {
        content: 'posts',
        comments: 'comments'
      }
    });
  } catch (e) {
    return next(e);
  }
});

app.route('/addPost')
  .get((req, res, next) => {
    res.render('layout', {
      subtitle: 'Write a post',
      links: [{ url: '/', text: 'Home' }],
      css: ['addPost'],
      partials: { content: 'addPost' }
    });
  })
  .post(async (req, res, next) => {
    const newPost = {
      title: req.body.title,
      content: req.body.content,
      author: 'Donald Trump',
      date: new Date()
    };

    try {
      await posts.insertOne(newPost);
      res.redirect('/');
    } catch (e) {
      return next(e);
    }
  });

app.post('/posts/:id/comments', async (req, res, next) => {
  const newComment = {
    content: req.body.content,
    author: 'Elizabeth Warren',
    date: new Date()
  };

  try {
    await posts.updateOne({ _id: mongo.ObjectId(req.params.id) },
      {
        $push: {
          comments: newComment
        }
      });

    res.status(201).end();

    //io.emit('comment', { postId: req.params.id, comment: newComment });

    res.render('comments', { comments: [newComment] }, (err, htmlString) => {
      if (err) {
        return next(err);
      }
      io.emit('comment', { postId: req.params.id, comment: htmlString });
    });


  } catch (e) {
    return next(e);
  }
});

async function connectToMongo() {
  const client = new mongo.MongoClient('mongodb://localhost:27017', { useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db('blog');
    posts = db.collection('posts');
  } catch (err) {
    console.error(err);
  }
}

connectToMongo().catch(e => console.error(e));

io = socketIo.listen(app.listen(80));