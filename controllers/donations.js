'use strict';

var makeDonationsRequest = require('./helpers/makeDonationsRequest');
var Promise = require('bluebird');

module.exports = function(req, res, next) {
    if (Object.keys(req.query).length > 0) {
        Promise.resolve()
            .bind(req.query)
            .then(makeDonationsRequest)
            .then(function(results) {
                res.json(results);
            });
    } else {
        res.status(400).json('No query parameters provided');
    }
};
