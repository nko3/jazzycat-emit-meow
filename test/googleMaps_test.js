/*jshint expr:true, evil: true*/
/*globals google*/

document.write('<script ' +
  'src="//maps.google.com/maps/api/js?sensor=true"></script>');

describe('google maps', function () {
  it('should exist', function () {
    google.should.exist;
    google.maps.should.exist;
  });
});