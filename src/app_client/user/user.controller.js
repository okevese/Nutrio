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
    vm.message = "Loading saved meals...";

    userData.getMeals()
      .then(function(meals) {
        console.log(meals);
        if(meals.data.meals[0].id) vm.message = "";
        vm.meals = meals.data.meals;
      }, function(e) {
        console.log(e);
      })
  }  

})();