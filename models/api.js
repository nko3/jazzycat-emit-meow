function API(data, parent) {
  var self = this;
  self.routes = ko.observableArray();
  $.getJSON('http://jazzycat-emit-meow-api.nko3.jit.su/',
    function (data, status) {
    if(status === 'success') {
      console.log('API methods found!');
// DEV...
data = {
  getKeywords: {
    url: 'GET /keyword',
    description: 'Retrieve all keywords that currently exist',
    response_template: {
      name: 'cat',
      count: '9001'
    }
  },
  createContribution: {
    url: 'POST /contribution',
    description: 'Create a new contribution',
    post_body_template: {
      keywords: "['keywrd1', 'keywrd two']",
      lat: 1.12313131,
      lng: -1.2112312,
      'meta': '{ JSON Object. This is an optional property }'
    }
  },
  getContributions: {
    url: 'GET /contribution',
    description: 'Retrieve all contributions',
    response_template: [{
      keywords: ['tacos', 'fast-food', 'mexican'],
      lat: 122.22,
      lng: -57.22
    }, {
      keywords: ['burritos', 'fast-food', 'mexican'],
      lat: 102.22,
      lng: -53.22
    }, {
      keywords: ['cat', 'meow'],
      lat: 120.22,
      lng: -51.22
    }]
  },
  getContributionsByKeyword: {
    url: 'GET /contribution/:keyword',
    description: 'Retrieve all contributions which have the provided keyword.',
    example_request: '/contribution/mexican',
    response_template: [{
      keywords: ['tacos', 'fast-food', 'mexican'],
      lat: 122.22,
      lng: -57.22
    }, {
      keywords: ['burritos', 'fast-food', 'mexican'],
      lat: 102.22,
      lng: -53.22
    }]
  // },
  // search: {
    // url: 'GET /search?:keyword1&:keyword2...',
    // description: 'Search for contributions by keyword. Here you can define as many keywords as you would like'
  }
};
      Object.getOwnPropertyNames(data).forEach(function (name) {
        var description = data[name],
            route = {'name': name};
        Object.merge(route, description);
        function norm(a) {
          if (typeof a === 'object') {
            return JSON.stringify(a, null, 4);
          }
          return '';
        }
        route.post_body_template = norm(route.post_body_template);
        route.response_template = norm(route.response_template);
        route.example_request = norm(route.example_request);
        self.routes.push(route);
      });
    }
  });
}