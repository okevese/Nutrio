(function() {

  mealPlanData.$inject = ['$http'];

  function mealPlanData($http) {
    var getMeals = function(mealParams) {
      return $http({
        method: "GET",
        url: '/api/v1/meal_plan',
        params: mealParams
      });
    }
    return {
      getMeals: getMeals
    };
  }
  
  angular
    .module('nutrioApp')
    .service('mealPlanData', mealPlanData);
  
})();