var express = require('express');
var router = express.Router();
var buildAuthUrl = require('./helpers/buildAuthUrl');
var Promise = require('bluebird');
var request = require('request-promise');

/* GET home page. */
router.get('/', function (req, res, next) {
    res.json('Hello World');
});

router.get('/auth', function (req, res, next) {
    if (req.query.code) {
        var options = {
            method: 'POST',
            uri: 'https://www.twitchalerts.com/api/v1.0/token',
            form: {
                'grant_type': 'authorization_code',
                'client_id': process.env.client_id,
                'client_secret': process.env.client_secret,
                'redirect_uri': process.env.redirect_uri,
                'code': req.query.code
            },
            json: true
        };

        request(options)
            .then(function (response) {
                res.json(response);
            })
            .catch(function (error) {
                console.log('failed');
            });
    } else {
        var uri = buildAuthUrl();
        res.redirect(uri)
    }
});

module.exports = router;
