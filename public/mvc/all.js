var mapperViewModel;

function now () {
  return new Date();
}

function MapperViewModel () {
  var self = this;
  // Non-editable catalog data - would come from the server
  self.mappers =  ko.observableArray([
    { mapperName: ":2", contributions: 1, lastUpdated: now() },
    { mapperName: ":1", contributions: 3, lastUpdated: now() },
    { mapperName: ":3", contributions: 2, lastUpdated: now() },
    { mapperName: ":3", contributions: 5, lastUpdated: now() }
  ]);
}

mapperViewModel = new MapperViewModel();



$(function() {
  ko.applyBindings(mapperViewModel);
});