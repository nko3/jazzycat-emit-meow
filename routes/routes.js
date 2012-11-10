var mapper = function (mapper) {
console.log('mapper', mapper);
  },
  routes = {
    '/:mapper': mapper
  },
  router = Router(routes);

router.init();

console.log(router);