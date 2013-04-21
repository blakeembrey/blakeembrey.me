var connect = require('connect');

connect()
  .use(function (req, res, next) {
    var url = req.url,
    host    = req.headers.host;
    if (host.slice(0, 4) === 'www.') {
      res.writeHead(301, {
        'Location': '//' + host.slice(4) + url
      });
      return res.end();
    }
    next();
  })
  .use(connect.compress())
  .use(connect.static('public'))
  .listen(process.env.PORT || 3000);
