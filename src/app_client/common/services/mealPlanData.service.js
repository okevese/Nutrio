(function() {
  var mealPlanData = function($http) {
    return $http({
      method: "GET",
      url: '/api/v1/meal_plan',
      params: data
    })
  }
  
  angular
    .module('nutrioApp')
    .service('mealPlanData', mealPlanData);
})();