(function() {

  function mealPlanData($http, data) {
    return $http({
      method: "GET",
      url: '/api/v1/meal_plan',
      params: data
    })
  }
  mealPlanData.$inject = ['$http', 'data'];

  //angular
    //.module('nutrioApp')
    //.service('mealPlanData', mealPlanData);
  
})();