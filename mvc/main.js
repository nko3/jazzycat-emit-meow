function AppViewModel () {
  var self = this;
  // Non-editable catalog data - would come from the server
  self.mappers =  ko.observableArray([
    { mapperName: ":2", contributions: 1, lastUpdated: 2 },
    { mapperName: ":1", contributions: 3, lastUpdated: 0 },
    { mapperName: ":3", contributions: 2, lastUpdated: 1 },
    { mapperName: ":3", contributions: 5, lastUpdated: 0 }
  ]);
}

var appViewModel = new AppViewModel();


$(function() {
  ko.applyBindings(appViewModel);
});