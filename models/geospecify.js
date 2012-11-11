/*global mapperViewModel*/

/**
 * @param {Object} data
 * @param {String|Number} data.lat Latitude of location
 * @param {String|Number} data.lng Longitude of location
 */
function Geospecify(data) {
  // Save the data to our object
  var self = this;
  this.submit = function () {
    console.log('zzxz', arguments);
  };
}