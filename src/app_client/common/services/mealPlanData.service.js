(function() {

  function mealPlanData($http) {
    var meals = function() {
      return $http({
        method: "GET",
        url: '/api/v1/meal_plan'
      })
    };

    var mealParams = function(url) {
      var urlObject = $location.search();
      return urlObject;
    }
    return meals;
  }
  mealPlanData.$inject = ['$http'];

  angular
    .module('nutrioApp')
    .service('mealPlanData', mealPlanData);
  
})();