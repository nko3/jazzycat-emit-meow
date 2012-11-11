/*global mapperViewModel*/
function User (data) {
  var self = this;
  Object.merge(self, data);
}

(function () {
  if (document.location.hash.length !== 0) {
    var token_query = document.location.hash.substring(1);
    var url = "https://www.dailycred.com/graph/me.json?" +
      "client=a17d7abb-849a-4fd1-ad9c-eff1eaf0cfb0&" + token_query;
    $.ajax({
      url: url,
      dataType: 'json',
      success: function (data) {
        window.mapperViewModel.user(new User(data));
      }
    });
  }
})();