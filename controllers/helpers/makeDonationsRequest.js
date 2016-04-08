'use strict';

var request = require('request-promise'),
    Promise = require('bluebird');

var sendRequest = function() {
    var options = {
        uri: 'https://www.twitchalerts.com/api/v1.0/donations',
        qs : {
            access_token: this.access_token,
            limit       : this.limit,
            before      : this.before,
            after       : this.after,
            currency    : this.currency
        }
    };

    return request(options);
};

module.exports = function() {
    var self = this;

    return Promise.resolve()
    .bind(self)
    .then(sendRequest);
};
