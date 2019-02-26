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

    vm.styleIngredientInput = {
      "background-color": "#3cb9c6",
      "border": "1px solid #32a1ac", 
      "background-image": "none",
      "border-color": "transparent"
    };
    
    vm.ingredient = {
      ingredientName: 'apple'
    };

    replaceIngredientData(vm.ingredient)
      .then(function(ingredient) {
        console.log(ingredient);
      }, function(e) {
        console.log(e);
      })
  }  
})();