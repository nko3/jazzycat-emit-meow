function Contribution (data, parent) {
  var self = this;
  self.lat = data.lat;
  self.lng = data.lng;
  self.keywords = ko.observableArray(data.keywords);
  self.meta = ko.observable(data.meta || {});
  self.metaStr = JSON.stringify(data.meta);
}