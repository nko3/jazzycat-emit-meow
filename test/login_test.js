/*jshint expr:true, es5:true*/
/*globals User, mapperViewModel*/
describe('login', function () {
  it('User should exist', function () {
    User.should.exist;
  });

  it('should take a hash', function () {
    if (document.location.hash.length === 0) {
      var user = mapperViewModel.user();
      (user === undefined).should.be.true;
    }
  });
});