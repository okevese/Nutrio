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

    vm.ingredient = {

    };
  }  
})();