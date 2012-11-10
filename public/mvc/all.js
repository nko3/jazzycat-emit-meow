var mapperViewModel,
  now = new Date();

function MapperViewModel () {
  var self = this;

  self.mappers =  ko.observableArray([
    { mapperName: "Motorcycle Parking Mapper", contributions: 17, lastUpdated: now, folder: 'motorcycle' },
    { mapperName: "Cat Mapper", contributions: 77, lastUpdated: now, folder: 'cat' },
    { mapperName: "Beard Mapper", contributions: 21, lastUpdated: now, folder: 'beard' },
    { mapperName: ":3", contributions: 5, lastUpdated: now, folder: 'kitteh' }
  ]);

  self.selectMapper = function (mapper) {
console.log('selected', mapper);
    location.hash = mapper.folder;
  };
}

mapperViewModel = new MapperViewModel();

$(function() {
  ko.applyBindings(mapperViewModel);
});