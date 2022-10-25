var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express 3' });
});

router.get('/function1', function (req, res, next) {
  res.render('function1', { title1: 'Xin chào bạn!' });
});

router.get('/function2', function (req, res, next) {
  res.render('function2', {
    title: 'Express 4499900',
    var2: 'demo variable 2'
   
  });
});

module.exports = router;
