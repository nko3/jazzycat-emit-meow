/*jshint expr:true*/
/*globals $, mapperViewModel*/
var baseUrl = 'http://jazzycat-emit-meow-api.nko3.jit.su';

function get (url, cb) {
  return $.get(baseUrl + url, cb, 'json');
}

function post (url, data, cb) {
  return $.post(baseUrl + url, data, cb, 'json');
}
describe('api', function () {
  describe('mappers', function () {
    it('should start empty', function () {
      mapperViewModel.mappers().should.be.empty;
    });

    it('should fill up', function (done) {
      setTimeout(function () {
        mapperViewModel.mappers().should.not.be.empty;
        done();
      }, 1000);
    });
  });

  describe('get /', function () {
    it('should give commands', function (done) {
      get('/', function (data) {
        data.search.should.exist;
        done();
      });
    });
  });

  describe('get /contribution', function () {
    it('should give contribs', function (done) {
      get('/contribution', function (data) {
        data.should.be.a('array');
        done();
      });
    });
  });

  describe('get /contribution/:keyword', function () {
    it('should give contribs', function (done) {
      get('/contribution/test', function (data) {
        data.should.be.a('array');
        done();
      });
    });
  });

  describe('post /contribution', function () {
    it('should give an id', function (done) {
      post('/contribution', {
        lat: 4.5,
        lng: 3.2,
        keywords: [
          'test',
          'api'
        ],
        meta: {
          test: true
        }
      }, function (data) {
        data.id.should.exist;
        done();
      });
    });
  });

  describe('get /keyword', function () {
    it('should give keywords', function (done) {
      get('/keyword', function (data) {
        data.should.be.a('array');
        done();
      });
    });
  });
});