/*jshint expr:true*/
/*globals google*/
describe('google maps', function () {
  it('should exist', function () {
    google.should.exist;
    google.maps.should.exist;
  });
});