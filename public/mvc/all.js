var mapperViewModel;

function Mapper (data, parent) {
  var self = this;
  self.mapperName = data.name;
  self.contributions = data.contributions;
  self.lastUpdated = new Date();
  self.folder = data.folder;
  self.select = function () {
    location.hash = self.folder;
    parent.selectedMapper(self);
  };
  self.deselect = function () {
    location.hash = '/';
    parent.selectedMapper(null);
  };
}

function MapperViewModel () {
  var self = this;

  self.mappers =  ko.observableArray([
    {
      name: 'Motorcycle Parking Mapper',
      contributions: 17,
      folder: '/motorcycle'
    },
    {
      name: 'Cat Mapper',
      contributions: 77,
      folder: '/cat'
    },
    {
      name: 'Beard Mapper',
      contributions: 21,
      folder: '/beard'
    },
    {
      name: ':3',
      contributions: 5,
      folder: '/kitteh'
    }
  ].map(function (data) {
    return new Mapper(data, self);
  }));

  self.selectedMapper = ko.observable();
  self.createMapper = function (data) {// TODO: Pass in data
    self.mappers.push(new Mapper(data, self));
  };
  self.user = ko.observable();
}

mapperViewModel = new MapperViewModel();

$(function() {
  ko.applyBindings(mapperViewModel);
});
/*global mapperViewModel*/
function User (data) {
  var self = this;
  Object.merge(self, data);
}

(function () {
  if (document.location.hash.length !== 0){
    var token_query = document.location.hash.substring(1);
    var url = "https://www.dailycred.com/graph/me.json?client=a17d7abb-849a-4fd1-ad9c-eff1eaf0cfb0&" + token_query;
    $.ajax({
      url: url,
      dataType: 'json',
      success: function(data){
        window.mapperViewModel.user(new User(data));
      }
    });
  }
})();