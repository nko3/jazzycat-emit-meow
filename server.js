var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello Mapper-maker\n');
}).listen(8000);

console.log('Server running at http://0.0.0.0:8000/');
