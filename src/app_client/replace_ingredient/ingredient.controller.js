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

    vm.errorInput = {
      "color": "#f3c4a3"
    };

    vm.ingredientInvalid = false;

    vm.onSubmit = function() {
      if(!vm.ingredientForm.ingredient.$valid) {
        vm.ingredientInvalid = true;
      }

      if(vm.ingredientForm.$valid) {
        vm.displayReplaceIngredient(vm.ingredient);
      }
    }

    vm.displayReplaceIngredient = function(ingredients) {
      replaceIngredientData(ingredients)
        .then(function(ingredient) {
          console.log(ingredient);
        }, function(e) {
          console.log(e);
        })
    }
  }  
})();