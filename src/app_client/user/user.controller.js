(function () {
  angular
    .module('nutrioApp')
    .controller('userCtrl', userCtrl);

  function userCtrl() {
    var vm = this;

    vm.pageHeader = {
      title: "User Profile",
      strapline: "Track your favourite meals for later"
    };
    
  }  

})();