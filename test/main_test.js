/*jshint expr:true*/
/*globals appViewModel*/
describe('main', function () {
  it('should exist', function () {
    appViewModel.should.exist;
  });

  it('should be an object', function () {
    appViewModel.should.be.a('object');
  });

  describe('mappers', function () {
    it('should exist', function () {
      appViewModel.mappers.should.exist;
    });

    it('should be an array', function () {
      appViewModel.mappers.should.be.a('array');
    });
  });
});