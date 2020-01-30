var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', function (req, res, next) {
  res.send('you made a post!');
});

router.get('/foo', function (req, res, next) {
  res.render('index', { title: 'Foo' });
});

module.exports = router;
