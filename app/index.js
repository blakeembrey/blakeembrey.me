'use strict';

var express = require('express'),
http        = require('http'),
app         = module.exports = express();

// Redirect to non-www url
app.use(function (req, res, next) {
  var url = req.url,
  host    = req.headers.host;
  if (host.substr(0, 4) === 'www.') {
    return res.redirect(301, '//' + host.substr(4) + url);
  }
  next();
});

// Set up express environment based settings
app.configure('development', function() {
  app.use(express.logger());
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function() {
  app.use(express.errorHandler());
});

// File directories
app.use(express.favicon(__dirname + '/public/favicon.ico'));
app.use(express.compress());
app.use(express['static'](__dirname + '/public'));

http.createServer(app).listen(process.env.PORT || 3000);
