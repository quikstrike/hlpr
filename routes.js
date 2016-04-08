'use strict';

var express = require('express');
var router = express.Router();
var ctrl = require('./controllers');

console.log(ctrl);
router.get('/', ctrl.index);
router.get('/auth', ctrl.auth);
router.get('/donations', ctrl.donations);

module.exports = router;
