function API(data, parent) {
  var self = this;
  console.log('zzz');
  $.getJSON('http://jazzycat-emit-meow-api.nko3.jit.su/',
    function (data, status) {
    if(status === 'success') {
      console.log('API methods found!');
      console.log(data);
      // data.forEach(function (contrib) {
        // self.contributions.push(new Contribution(contrib, self));
      // });
      // console.log('Viewing ' + self.contributions().length + ' contributions');
    }
  });
}