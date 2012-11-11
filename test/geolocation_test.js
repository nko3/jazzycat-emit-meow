/*jshint expr:true*/
/*global getCoordinates*/
describe('geolocation', function () {
  it('should exist', function () {
    window.getCoordinates.should.exist;
  });

  it('should get coordinates', function (done) {
    getCoordinates(done);
  });
});