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
        vm.steps = instructions.data.steps;
        vm.ingredientList = [];
        
        angular.forEach(vm.steps, function(step) {
          if (step.ingredients.length !== 0) {  // The step may not require ingredients, i.e empty array
            angular.forEach(step.ingredients, function(ingredient) {
              if (!vm.ingredientList.includes(ingredient.name)) { // Removes repeating ingredients
                vm.ingredientList.push(ingredient.name);
              }  
            });
          }
          
        });
        console.log(vm.ingredientList);
        
      }, function(e) {

      });
  }  
})();