(function() {
  angular
    .module('nutrioApp')
    .service('dailyCalorieData', dailyCalorieData);
    
  dailyCalorieData.$inject = ['$http'];

  function dailyCalorieData($http) {
    var getDailyCalorie = function(calorieParams) {
      return $http({
        method: "GET",
        url: '/api/v1/daily_calorie_recipe',
        params: calorieParams
      });
    } 
    return {
      getDailyCalorie: getDailyCalorie
    };
  }

})();