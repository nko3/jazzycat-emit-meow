var mapper = function (mapper) {
    // should be removed and replaced with a knockoutjs solution
    // something like http://jsfiddle.net/rniemeyer/xVxKD/

    var $breadcrumb = $('.breadcrumb');

    // Update breadcrumb

    // Load selected mapper
  },
  routes = {
    '/:mapper': mapper
  },
  router = Router(routes);

router.init();

console.log(router);