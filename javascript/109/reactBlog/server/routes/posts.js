const router = require('express').Router();
const Post = require('../models/post');
const authenticatedOnly = require('../authenticatedOnly');

router.route('/').
  get(async (req, res, next) => {
    const skip = +req.query.skip;
    const limit = +req.query.limit;

    try {
      const thePosts = await Post.find()
        .skip(skip)
        .limit(limit);

      res.send(thePosts);
    } catch (e) {
      return next(e);
    }
  })
  .post(authenticatedOnly, async (req, res, next) => {
    const newPost = new Post({
      title: req.body.title,
      content: req.body.content,
      author: req.session.user,
      date: new Date()
    });

    try {
      await newPost.save();
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
    /*await Post.findByIdAndUpdate(req.params.id,
      {
        $push: {
          comments: newComment
        }
      });*/

    const post = await Post.findOne({ _id: req.params.id });
    if (!post) {
      const err = new Error(`Post ${req.params.id} not found`);
      err.status = 404;
      return next(err);
    }
    post.comments = post.comments || [];
    post.comments.push(newComment);
    await post.save();

    res.status(201).send(newComment);
    req.app.locals.io.emit('comment', { postId: req.params.id, comment: newComment });
  } catch (e) {
    return next(e);
  }
});

module.exports = router;