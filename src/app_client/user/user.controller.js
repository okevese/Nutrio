(function () {
  angular
    .module('nutrioApp')
    .controller('userCtrl', userCtrl);

  userCtrl.$inject = ['userData'];    
  function userCtrl(userData) {
    var vm = this;

    vm.pageHeader = {
      title: "User Profile",
      strapline: "Track your favourite meals for later"
    };

    userData.getMeals()
      .then(function(meals) {
        console.log(meals);
      }, function(e) {
        console.log(e);
      })
  }  

})();