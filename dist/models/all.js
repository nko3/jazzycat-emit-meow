var mapperViewModel;

function Mapper (data, parent) {
  var self = this;
  self.mapperName = data.name;
  self.contribution_ids = data.contribution_ids;
  self.numContributions = ko.computed(function () {
    return self.contribution_ids &&
      self.contribution_ids.length || 0;
  });
  self.lastUpdated = new Date();
  self.folder = data.name;
  self.select = function () {
    location.hash = '/' + self.folder;
    parent.selectedMapper(self);
  };
  self.deselect = function () {
    location.hash = '/';
    parent.selectedMapper(null);
  };
}

function MapperViewModel () {
  var self = this;
  // $.getJSON('http://jazzycat-emit-meow-api.nko3.jit.su/keyword',
    // function (data, status) {
    // if(status === 'success') {
      // console.log(data.length);
      // data.forEach(function (mapper) {
        // self.mappers.push(new Mapper(mapper, self));
      // });
    // }
  // });
  setTimeout(function () {
    var data = [{'keyword': 'you', 'count': 20}, {'keyword': 'are', 'count': 10}, {'keyword': 'on', 'count': 3}, {'keyword': 'dev', 'count': 19}];
    console.log(data.length);
    data.forEach(function (mapper) {
      self.mappers.push(new Mapper(mapper, self));
    });
  }, 100);

  self.mappers = ko.observableArray();

  self.selectedMapper = ko.observable();
  self.createMapper = function () {
    // TODO: Gather data for creation of new mapper
    self.mappers.push(new Mapper({}, self));
  };
  self.user = ko.observable();
}

window.mapperViewModel = new MapperViewModel();

$(function() {
  ko.applyBindings(mapperViewModel);
});
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
/*global mapperViewModel*/
function User (data) {
  var self = this;
  Object.merge(self, data);
}

(function () {
  if (document.location.hash.length !== 0) {
    var token_query = encodeURIComponent(document.location.hash.substring(1));
    // var url = "https://www.dailycred.com/graph/me.json?" +
      // "client=a17d7abb-849a-4fd1-ad9c-eff1eaf0cfb0";
    var url = "https://www.dailycred.com/graph/me.json?" +
      "client=a17d7abb-849a-4fd1-ad9c-eff1eaf0cfb0&" + token_query;
    $.ajax({
      url: url,
      dataType: 'json',
      success: function (data) {
        window.mapperViewModel.user(new User(data));
      }
    });
  }
})();