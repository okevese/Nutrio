(function() {

  mealPlanData.$inject = ['$http', 'data'];
  function mealPlanData($http, data) {
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