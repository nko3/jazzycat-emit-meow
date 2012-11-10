var express = require('express'),
    lactate = require('lactate'),
    app = express.createServer();

// Lactate servers for gzipping? (recommendation by Henry)
app.use('/public', lactate['static'](__dirname + '/dist'));
app.use('/public', lactate['static'](__dirname + '/public'));

// Pages is the server views dir
app.set('views', __dirname + '/pages');

// TODO: Deal with layout.html
app.set('view options', {
  layout: false
});

app.set('view engine', 'jade');

// Send down index.html
app.get('/', function (req, res) {
  res.render('index', {'bodyContent': 'test'});
});

// Begin listening and log accordingly
app.listen(8080);
console.log('Server running at http://localhost:8080/');
