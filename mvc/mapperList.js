var mapperViewModel;

function Mapper (data, parent) {
  var self = this;
  self.mapperName = data.name;
  self.contributions = data.contributions;
  self.lastUpdated = new Date();
  self.folder = data.folder;
  self.select = function () {
    location.hash = self.mapperName;
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
}

mapperViewModel = new MapperViewModel();

$(function() {
  ko.applyBindings(mapperViewModel);
});