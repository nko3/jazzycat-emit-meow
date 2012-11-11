var mapperViewModel;

function Mapper (data, parent) {
  var self = this;
  self.mapperName = data.name;
  self.contribution_ids = data.contribution_ids;
  self.numContributions = data.count || 0;
  self.lastUpdated = new Date();
  self.contributions = ko.observableArray();
  // self.folder = data.keyword;
  self.select = function () {
    location.hash = '/' + self.mapperName;
    $.getJSON('http://jazzycat-emit-meow-api.nko3.jit.su/contribution/' +
      self.mapperName,
      function (data, status) {
      if(status === 'success') {
        console.log('Contributions found: ', data.length);
        data.forEach(function (contrib) {
          self.contributions.push(new Contribution(contrib, self));
        });
        console.log('Viewing ' + self.contributions().length + ' contributions');
      }
    });
    parent.selectedMapper(self);
  };
  self.deselect = function () {
    location.hash = '/';
    self.contributions([]);
    parent.selectedMapper(null);
  };
}

function MapperViewModel () {
  var self = this;
  $.getJSON('http://jazzycat-emit-meow-api.nko3.jit.su/keyword',
    function (data, status) {
    if(status === 'success') {
      console.log('Mappers found: ', data.length);
      data.forEach(function (mapper) {
        self.mappers.push(new Mapper(mapper, self));
      });
    }
  });
  // // DEV FOR ITEMS
  // setTimeout(function () {
    // var data = [{'name': 'you', 'count': 20}, {'name': 'are', 'count': 10}, {'name': 'on', 'count': 3}, {'name': 'dev', 'count': 19}];
    // console.log(data.length);
    // data.forEach(function (mapper) {
      // self.mappers.push(new Mapper(mapper, self));
    // });
  // }, 100);

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