function AppViewModel () {
  // Non-editable catalog data - would come from the server
  self.mappers = [
    { mapperName: "Standard (sandwich)", contributions: 2, lastUpdated: 2 },
    { mapperName: "Standard (sandwich)", contributions: 3, lastUpdated: 0 },
    { mapperName: "Standard (sandwich)", contributions: 2, lastUpdated: 1 },
    { mapperName: "Standard (sandwich)", contributions: 5, lastUpdated: 0 }
  ];
}

$(function() {
  ko.applyBindings(new AppViewModel());
});