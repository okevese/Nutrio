(function() {
  angular
    .module('nutrioApp')
    .controller('instructionsCtrl', instructionsCtrl);

  instructionsCtrl.$inject = ['$routeParams', 'instructionsData'];
  function instructionsCtrl($routeParams, instructionsData) {
    var vm = this;
    vm.mealid = $routeParams.mealid;
    vm.pageHeader = {
      title: 'Recipe Instructions',
      strapline: 'Instructions to prepare your choice meal'
    };
    
    instructionsData(vm.mealid)
      .then(function(instructions) {
        console.log(instructions);
      }, function(e) {

      })
  }  
})();