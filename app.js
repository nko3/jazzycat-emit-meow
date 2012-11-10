var express = require('express'),
    app = express.createServer();

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(8080);

console.log('Server running at http://localhost:8080/');
