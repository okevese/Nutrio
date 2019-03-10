(function() {
  angular
    .module('nutrioApp')
    .service('instructionsData', instructionsData);
  
  instructionsData.$inject = ['$http'];
  
  function instructionsData($http) {
    return function(mealid) {
      return $http({
        method: "GET",
        url: '/api/v1/recipe_instructions/' + mealid
      });
    }
  }
})();