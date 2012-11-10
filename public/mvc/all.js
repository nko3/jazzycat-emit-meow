var appViewModel;

function now () {
  return new Date();
}

function AppViewModel () {
  var self = this;
  // Non-editable catalog data - would come from the server
  self.mappers =  ko.observableArray([
    { mapperName: ":2", contributions: 1, lastUpdated: now() },
    { mapperName: ":1", contributions: 3, lastUpdated: now() },
    { mapperName: ":3", contributions: 2, lastUpdated: now() },
    { mapperName: ":3", contributions: 5, lastUpdated: now() }
  ]);
}

appViewModel = new AppViewModel();



$(function() {
  ko.applyBindings(appViewModel);
});