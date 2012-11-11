function Contribution (data, parent) {
  var self = this,
    meta = data.meta || {};

  self.lat = data.lat;
  self.lng = data.lng;
  self.keywords = ko.observableArray(data.keywords);
  self.meta = ko.observable(meta);
  self.contributor = meta.contributor;
}