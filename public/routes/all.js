var mapper = function (mapperName) {
console.log('mapper', mapperName);
  },
  routes = {
    '/:mapperName': mapper
  },
  router = Router(routes);

router.init();