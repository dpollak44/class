const router = require('express').Router();
const bcrypt = require('bcrypt');
const User = require('../models/user');

router.post('/register', async (req, res, next) => {
  if (!req.body.user || !req.body.password) {
    return next(new Error('User and password are required'));
  }
  bcrypt.hash(req.body.password, 10, async (error, hash) => {
    if (error) return next(error);

    try {
      const newUser = new User({ user: req.body.user, password: hash });
      await newUser.save();

      res.status(201).end();
    }
    catch (e) {
      if (e.code === 11000) {
        const err = new Error('That username is already used. Please choose another');
        err.status = 409;
        return next(err);
      }
      return next(e);
    }
  });
});

router.post('/login', async (req, res, next) => {
  try {
    const result = await User.findOne({ user: req.body.user });
    if (!result) {
      const err = new Error('Invalid username and password');
      err.status = 401;
      return next(err);
    }

    bcrypt.compare(req.body.password, result.password, (error, result) => {
      if (error) return next(error);
      if (!result) {
        const err = new Error('Invalid username and password');
        err.status = 401;
        return next(err);
      }

      req.session.user = req.body.user;
      res.end();
    });
  }
  catch (e) {
    return next(e);
  }
});

router.get('/logout', (req, res, next) => {
  req.session.destroy();
  res.end();
});

module.exports = router;