'use strict';

module.exports = function() {
    var client_id = process.env.client_id,
    redirect_uri = process.env.redirect_uri;

    return 'https://www.twitchalerts.com/api/v1.0/authorize?client_id=' + client_id + '&response_type=code&scope=' + encodeURI('donations.read') + '&redirect_uri=' + encodeURI(redirect_uri);
};
