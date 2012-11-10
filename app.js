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
  res.render('index');
});
app.get('/bootstrap_url_test', function (req, res) {
  res.render('bootstrap_url_test');
});
app.get('/google_maps', function (req, res) {
  res.render('google_maps');
});

// Health page (attribution to dshaw)
var pkg = require('./package.json');
    version = pkg.version;
app.get('/health', function (req, res) {
  var health = {
    'version': pkg.version,
    'pid': process.pid,
    'memory': process.memoryUsage(),
    'uptime': process.uptime()
  };
  res.send(health);
});

// Begin listening and log accordingly
app.listen(8080);
console.log('Server running at http://localhost:8080/');
