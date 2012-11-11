/*jshint expr:true*/
/*globals $, mapperViewModel*/
var baseUrl = 'http://jazzycat-emit-meow-api.nko3.jit.su';
describe('api', function () {
  describe('mappers', function () {
    it('should start empty', function () {
      mapperViewModel.mappers().should.be.empty;
    });

    it('should fill up', function (done) {
      setTimeout(function () {
        mapperViewModel.mappers().should.not.be.empty;
        done();
      }, 500);
    });
  });

  describe('get /', function () {
    it('should return an array', function (done) {
      $.get(baseUrl + '/', function (data) {
        data.should.be.a('array');
        done();
      });
    });
  });

  describe('get /test', function () {
    it('should return an array', function (done) {
      $.get(baseUrl + '/test', function (data) {
        data.should.be.a('array');
        done();
      });
    });
  });

  describe('post /test{{random}}', function () {
    it('should return an object', function (done) {
      $.post(baseUrl + '/test' + (Math.random()), {}, function (data) {
        data.should.be.a('object');
        done();
      });
    });
  });

  describe('post /test/node/', function () {
    it('should return an object', function (done) {
      $.post(baseUrl + '/test/node/', {
        lat: 3.4,
        long: 5.6,
        meta: {
          test: true
        }
      }, function (data) {
        data.should.be.a('object');
        done();
      });
    });
  });

  describe('post /test/contribution/', function () {
    it('should return an object', function (done) {
      $.post(baseUrl + '/test/contribution/', {
        lat: 3.4,
        long: 5.6,
        meta: {
          test: true
        }
      }, function (data) {
        data.should.be.a('object');
        done();
      });
    });
  });
});