var mapper = function (mapper) {
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