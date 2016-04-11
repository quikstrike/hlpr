'use strict';

var request = require('request-promise');

module.exports = function(req, res, next) {
  if (Object.keys(req.query).length > 0) {
      // TODO: Clean this up, and maybe streamline it a bit.
       var options = {
        uri : req.query.uri,
        headers : {
            'X-Requested-With' : 'XMLHttpRequest',
        }
      };

      for( var key in req.query){
        if(key !== 'uri') {
          options.uri = options.uri + '&' + key + '=' + req.query[key];
        }
      }

      request(options).
      then(function(results) {
        res.set('Access-Control-Allow-Origin','*').json(results);
      });

  } else {
      res.status(400).json('No query parameters provided');
  }
};
