(function() {

  function mealPlanData($http) {
    return $http({
      method: "GET",
      url: '/api/v1/meal_plan',
      params: {
        diet: 'vegetarian',
        exclude: 'shellfish, olives',
        targetCalories: 2000,
        timeFrame: 'day'
      }
    })
  }
  mealPlanData.$inject = ['$http'];

  angular
    .module('nutrioApp')
    .service('mealPlanData', mealPlanData);
  
})();