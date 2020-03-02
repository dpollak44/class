const router = require('express').Router();
const mongo = require('mongodb');

const authenticatedOnly = require('../authenticatedOnly');

router.route('/').
  get(async (req, res, next) => {
    const skip = +req.query.skip;
    const limit = +req.query.limit;

    try {
      const thePosts = await req.app.locals.posts.find()
        .skip(skip)
        .limit(limit)
        .toArray();

      res.send(thePosts);
    } catch (e) {
      return next(e);
    }
  })
  .post(authenticatedOnly, async (req, res, next) => {
    const newPost = {
      title: req.body.title,
      content: req.body.content,
      author: req.session.user,
      date: new Date()
    };

    try {
      await req.app.locals.posts.insertOne(newPost);
      res.status(201).send(newPost);
    } catch (e) {
      return next(e);
    }
  });

router.post('/:id/comments', authenticatedOnly, async (req, res, next) => {
  const newComment = {
    content: req.body.content,
    author: req.session.user,
    date: new Date()
  };

  try {
    await req.app.locals.posts.updateOne({ _id: mongo.ObjectId(req.params.id) },
      {
        $push: {
          comments: newComment
        }
      });

    res.status(201).send(newComment);
    req.app.locals.io.emit('comment', { postId: req.params.id, comment: newComment });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;