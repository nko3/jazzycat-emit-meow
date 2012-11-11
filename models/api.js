function API(data, parent) {
  var self = this;
  self.routes = ko.observableArray();
  $.getJSON('http://jazzycat-emit-meow-api.nko3.jit.su/',
    function (data, status) {
    if(status === 'success') {
      console.log('API methods found!');
      Object.getOwnPropertyNames(data).forEach(function (name) {
        var description = data[name],
            route = {'name': name};
        Object.merge(route, description);
        Object.merge(route, {'post_body_template': null});
        self.routes.push(route);
      });
    }
  });
}