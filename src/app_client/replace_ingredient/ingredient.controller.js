(function() {
  angular
    .module('nutrioApp')
    .controller('replaceIngredientCtrl', replaceIngredientCtrl);

  replaceIngredientCtrl.$inject = ['replaceIngredientData'];
  function replaceIngredientCtrl(replaceIngredientData) {
    var vm = this;
    vm.pageHeader = {
      title: "Replace Ingredients",
      strapline: "Find a similar ingredients"
    };

    vm.ingredient = { };

    vm.ingredientInvalid = false;

    vm.onSubmit = function() {
      console.log('in submit')
      
  
      vm.displayReplaceIngredient(vm.ingredient);
      
    }

    vm.displayReplaceIngredient = function(ingredient) {
      replaceIngredientData(vm.ingredient)
        .then(function(ingredient) {
          console.log(ingredient);
        }, function(e) {
          console.log(e);
        })
    }
  }  
})();