(function() {
  angular
    .module('nutrioApp')
    .controller('dailyCalorieCtrl', dailyCalorieCtrl);

  dailyCalorieCtrl.$inject = ['dailyCalorieData'];  
  function dailyCalorieCtrl(dailyCalorieData) {
    var vm = this;
    vm.pageHeader = {
      title: "Daily Calorie Recipes",
      strapline: "Find multiple recipes that, when added up, reach your daily caloric needs."
    };

    vm.calorieParams = {
      targetCalories: 2000,
      timeFrame: 'day'
    };

    vm.message = "Loading daily calorie recipes...";

    dailyCalorieData.getDailyCalorie(vm.calorieParams)
      .then(function(meals) {
        if(meals.data.recipeDailyCalorie.meals[0].id) vm.message = "";
        console.log(meals);
        vm.meals = meals.data.recipeDailyCalorie.meals;
      }, function(e) {
        console.log(e);
      })

    
  }  
})();