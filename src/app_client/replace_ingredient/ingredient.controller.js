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

    vm.ingredientParams = { };

    vm.errorInput = {
      "color": "#f3c4a3"
    };

    vm.ingredientInvalid = false;

    vm.onSubmit = function() {
      if(!vm.ingredientForm.ingredient.$valid) {
        vm.ingredientInvalid = true;
      }

      if(vm.ingredientForm.$valid) {
        vm.displayReplaceIngredient(vm.ingredientParams);
      }
    }

    vm.displayReplaceIngredient = function(ingredientParams) {
      replaceIngredientData(ingredientParams)
        .then(function(ingredient) {
          console.log(ingredient);
          vm.message = ingredient.data.message;
        }, function(e) {
          vm.message = "Could not find any substitutes for " + ingredientParams.ingredientName;
          console.log(e);
        })
    }
  }  
})();