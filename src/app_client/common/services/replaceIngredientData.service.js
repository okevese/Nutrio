(function() {
  angular
    .module('nutrioApp')
    .service('replaceIngredientData', replaceIngredientData);
  
  replaceIngredientData.$inject = ['$http'];
  
  function replaceIngredientData($http) {
    return function(ingredient) {
      return $http({
        method: "GET",
        url: '/api/v1/replace_ingredient',
        params: ingredient
      });
    }
  }
})();