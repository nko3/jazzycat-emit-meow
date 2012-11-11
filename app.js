/*jshint es5:true*/
var express = require('express'),
    env = process.env.NODE_ENV,
    inProduction = env === 'production',
    inDevelopment = !inProduction,
    app = express.createServer();

// Lactate servers for gzipping? (recommendation by Henry)
app.use('/public', express.static(__dirname + '/dist'));
app.use('/public', express.static(__dirname + '/public'));

// Pages is the server views dir
app.set('views', __dirname + '/pages');
app.set('view engine', 'jade');

// Send down index.html
app.get('/', function (req, res) {
  res.render('index');
});

// // If we are in development, display test pages
// if (inDevelopment) {
  app.get('/bootstrap_url_test', function (req, res) {
    res.render('bootstrap_url_test');
  });
  app.get('/google_maps', function (req, res) {
    res.render('google_maps');
  });
  app.get('/geolookup', function (req, res) {
    res.render('geolookup');
  });
  app.get('/geospecify', function (req, res) {
    res.render('geospecify');
  });
  app.get('/mapper_view', function (req, res) {
    res.render('mapper_view');
  });
  app.get('/api_docs', function (req, res) {
    res.render('api_docs');
  });
// }

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
