var mapperViewModel;

function Mapper (data, parent) {
  var self = this;
  self.mapperName = data.name;
  self.contribution_ids = data.contribution_ids;
  self.numContributions = data.count || 0;
  self.lastUpdated = new Date();
  self.contributions = ko.observableArray();
  self.select = function () {
    location.hash = '/' + self.mapperName;
    $.getJSON('http://jazzycat-emit-meow-api.nko3.jit.su/contribution/' +
      self.mapperName,
      function (data, status) {
      if(status === 'success') {
        console.log('Contributions found: ', data.length);
        data.forEach(function (contrib) {
          self.contributions.push(new Contribution(contrib, self));
        });
        console.log('Viewing ' + self.contributions().length + ' contributions');

        // Load in map
        loadMapperMap();
      }
    });
    parent.selectedMapper(self);
  };
  self.deselect = function () {
    location.hash = '/';
    self.contributions([]);
    parent.selectedMapper(null);
  };
}

function MapperViewModel () {
  var self = this;
  $.getJSON('http://jazzycat-emit-meow-api.nko3.jit.su/keyword',
    function (data, status) {
    if(status === 'success') {
      console.log('Mappers found: ', data.length);
      data.forEach(function (mapper) {
        self.mappers.push(new Mapper(mapper, self));
      });
    }
  });
  // // DEV FOR ITEMS
  // setTimeout(function () {
    // var data = [{'name': 'you', 'count': 20}, {'name': 'are', 'count': 10}, {'name': 'on', 'count': 3}, {'name': 'dev', 'count': 19}];
    // console.log(data.length);
    // data.forEach(function (mapper) {
      // self.mappers.push(new Mapper(mapper, self));
    // });
  // }, 100);

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

  var $nav = $('ul.nav');

  $nav.on('click', 'li', function () {
    var context = $(this).context,
      $clicked = $(context);
    $clicked.siblings().removeClass('active');
    $clicked.addClass('active');
  });
});


function loadMapperMap() {
  var mapper = mapperViewModel.selectedMapper(),
      contributions = mapper.contributions(),
      locations = contributions;

  // Generate our map
  var map = new GMaps({
    div: '#map'
  });

  // // DEV: Break all pass-by-objects to avoid GMaps deletion of cities
  // locations = JSON.parse(JSON.stringify(locations));

  // Render locations to markers
  var markers = locations.map(function (location) {
    var marker = map.createMarker(location);
    return marker;
  });

  // Add the markers to the map manually (a small hack for MarkerClusterer)
  map.markers.push.apply(map.markers, markers);

  // Create a marker clusterer on the locations
  var mcOptions = {gridSize: 50, maxZoom: 15},
      mc = new MarkerClusterer(map.map, markers, mcOptions);

  // Fit the zoom to the markers on the map
  map.fitZoom();
}