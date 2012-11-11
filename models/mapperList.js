var mapperViewModel;

function Mapper (data, parent) {
  var self = this;
  self.mapperName = data.keyword;
  self.contribution_ids = data.contribution_ids;
  self.numContributions = data.count || 0;
  self.lastUpdated = new Date();
  // self.folder = data.keyword;
  self.select = function () {
    location.hash = '/' + self.mapperName;
    parent.selectedMapper(self);
  };
  self.deselect = function () {
    location.hash = '/';
    parent.selectedMapper(null);
  };
}

function MapperViewModel () {
  var self = this;
  // $.getJSON('http://jazzycat-emit-meow-api.nko3.jit.su/keyword',
    // function (data, status) {
    // if(status === 'success') {
      // console.log(data.length);
      // data.forEach(function (mapper) {
        // self.mappers.push(new Mapper(mapper, self));
      // });
    // }
  // });
  setTimeout(function () {
    var data = [{'keyword': 'you', 'count': 20}, {'keyword': 'are', 'count': 10}, {'keyword': 'on', 'count': 3}, {'keyword': 'dev', 'count': 19}];
    console.log(data.length);
    data.forEach(function (mapper) {
      self.mappers.push(new Mapper(mapper, self));
    });
  }, 100);

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