'use strict';

var buildAuthUrl = require('./helpers/buildAuthUrl');
var request = require('request-promise');

module.exports = function(req, res, next) {
    if (req.query.code) {
        var options = {
            method: 'POST',
            uri   : 'https://www.twitchalerts.com/api/v1.0/token',
            form  : {
                grant_type   : 'authorization_code',
                client_id    : process.env.client_id,
                client_secret: process.env.client_secret,
                redirect_uri : process.env.redirect_uri,
                code         : req.query.code
            },
            json  : true
        };

        request(options)
            .then(function(response) {
                res.json(response);
            })
            .catch(function(error) {
                console.log('failed');
            });
    } else {
        var uri = buildAuthUrl();

        res.redirect(uri);
    }
};
