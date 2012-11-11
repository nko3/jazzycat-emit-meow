var mapperViewModel;

function Mapper (data, parent) {
  var self = this;
  self.mapperName = data.name;
  self.contribution_ids = data.contribution_ids;
  self.numContributions = ko.computed(function () {
    return self.contribution_ids &&
      self.contribution_ids.length || 0;
  });
  self.lastUpdated = new Date();
  self.folder = data.folder;
  self.select = function () {
    location.hash = self.folder;
    parent.selectedMapper(self);
  };
  self.deselect = function () {
    location.hash = '';
    parent.selectedMapper(null);
  };
}

function MapperViewModel () {
  var self = this,
    mappers = $.get('http://jazzycat-emit-meow-api.nko3.jit.su/',
      function (data, status) {
      if(status === 'success') {
        console.log(data.length);
        data.forEach(function (mapper) {
          self.mappers.push(new Mapper(mapper, self));
        });
      }
    }, 'json');

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
});