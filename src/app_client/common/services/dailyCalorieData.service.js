
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
    }; 

    var saveDailyCalorieMeal = function(meal) {
      console.log(meal);
      return $http({
        method: "POST",
        url: '/api/v1/daily_calorie_recipe/' + meal.id,
        data: meal
      })
    };

    return {
      getDailyCalorie: getDailyCalorie,
      saveDailyCalorieMeal: saveDailyCalorieMeal
    };
  }

})();