// https://gist.github.com/4053059
// Asynchronous retrieval of coordinates
function getCoordinates(cb) {
  // Grab geolocation from the navigator
  var geolocation = window.navigator.geolocation;

  // If geolocation exists, start fetching location
  if (geolocation) {
    geolocation.getCurrentPosition(function (position) {
      cb(null, position.coords);
    }, cb);
  } else {
  // Otherwise, callback with an error
    cb(1);
  }
}