'use strict';

var express = require('express');
var router = express.Router();
var ctrl = require('./controllers');

router.get('/', ctrl.index);
router.get('/auth', ctrl.auth);
router.get('/donations', ctrl.donations);
router.get('/proxy', ctrl.proxy);

module.exports = router;
