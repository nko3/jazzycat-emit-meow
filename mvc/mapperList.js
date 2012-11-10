var mapperViewModel,
  now = new Date();

function MapperViewModel () {
  var self = this;

  self.mappers =  ko.observableArray([
    { mapperName: ":2", contributions: 1, lastUpdated: now },
    { mapperName: ":1", contributions: 3, lastUpdated: now },
    { mapperName: ":3", contributions: 2, lastUpdated: now },
    { mapperName: ":3", contributions: 5, lastUpdated: now }
  ]);
}

mapperViewModel = new MapperViewModel();

$(function() {
  ko.applyBindings(mapperViewModel);
});