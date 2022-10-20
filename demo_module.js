var http = require('http');
var dt = require('./myfirstmodule');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write("The date and time are currently: " + dt.myDateTime());
  res.write("<br/>");
  res.write("<br/> Get new message: " + dt.myalert());
  res.end();
}).listen(8080);
