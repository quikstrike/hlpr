var express = require('express');
var router = express.Router();
var buildAuthUrl = require('./helpers/buildAuthUrl');
var Promise = require('bluebird');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.json('Hello World');
});

router.get('/auth',function(req, res, next){
  var uri = buildAuthUrl();
  res.redirect(uri)
})

module.exports = router;
