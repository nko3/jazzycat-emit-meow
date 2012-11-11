/*global mapperViewModel*/

/**
 * @param {Object} data
 * @param {String|Number} data.lat Latitude of location
 * @param {String|Number} data.lng Longitude of location
 */
function Location(data) {
  // Save the data to our object
  var self = this;
  if (data.lat) { self.lat = +data.lat; }
  if (data.lng) { self.lng = +data.lng; }
}