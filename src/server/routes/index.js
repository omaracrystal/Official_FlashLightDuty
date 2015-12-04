var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/darkroom', function(req, res, next) {
  res.render('darkroom');

});

module.exports = router;
