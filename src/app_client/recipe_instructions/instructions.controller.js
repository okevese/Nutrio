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

    vm.styleFont = {
      "font-size": "20px"
    };
    
    instructionsData(vm.mealid)
      .then(function(instructions) {
        vm.steps = instructions.data.steps;
        vm.ingredientList = [];
        vm.equipmentList = [];
        var unique = {};
        console.log(vm.steps);
        angular.forEach(vm.steps, function(step) {
          angular.forEach(step.ingredients, function(ingredient) {
            if(!unique[ingredient.id]) { // To remove repeating ingredients in each step
              vm.ingredientList.push(ingredient);
              unique[ingredient.id] = true;
            }  
          });          
        });
        console.log(vm.ingredientList);
        
      }, function(e) {

      });
  }  
})();