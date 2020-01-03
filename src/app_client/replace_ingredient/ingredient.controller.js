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
      vm.loadingMessage = "Searching for replacement ingredient...";
      vm.substitute = "";
      vm.message = "";

      replaceIngredientData(ingredientParams)
        .then(function(ingredient) {
          console.log(ingredient.data.substitutes);
          vm.substitute = ingredient.data.substitutes;
          vm.loadingMessage = "";
          vm.message = ingredient.data.message;
        }, function(e) {
          vm.loadingMessage = "";
          vm.substitute = "";
          vm.message = "Could not find any substitutes for " + ingredientParams.ingredientName;
          console.log(e);
        })
    }
  }  
})();