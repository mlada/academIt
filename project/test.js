var HTTPServer = require('http-server').HTTPServer;

var httpServer = new HTTPServer({
  root: './public'
});

httpServer.start();