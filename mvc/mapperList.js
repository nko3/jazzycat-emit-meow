var mapperViewModel,
  now = new Date();

function MapperViewModel () {
  var self = this;

  self.mappers =  ko.observableArray([
    { mapperName: "Motorcycle Parking Mapper", contributions: 17, lastUpdated: now },
    { mapperName: "Cat Mapper", contributions: 77, lastUpdated: now },
    { mapperName: "Beard Mapper", contributions: 21, lastUpdated: now },
    { mapperName: ":3", contributions: 5, lastUpdated: now }
  ]);

  self.selectMapper = function (mapper) {
console.log('selected', mapper);
  };
}

mapperViewModel = new MapperViewModel();

$(function() {
  ko.applyBindings(mapperViewModel);
});