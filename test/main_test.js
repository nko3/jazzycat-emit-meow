/*jshint expr:true*/
/*globals mapperViewModel*/
describe('main', function () {
  it('should exist', function () {
    mapperViewModel.should.exist;
  });

  it('should be an object', function () {
    mapperViewModel.should.be.a('object');
  });

  describe('mappers', function () {
    it('should exist', function () {
      mapperViewModel.mappers.should.exist;
    });

    it('should be an observable array', function () {
      mapperViewModel.mappers().should.be.a('array');
    });
  });
});