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

    vm.styleCalorieInput = {
      "background-color": "#3cb9c6",
      "border-color": "transparent",
      "border-radius": "10px"
    };

    vm.calorieParams = {
      timeFrame: 'day'
    };

    // Initializes ng-show directive for form validation
    vm.targetCaloriesInvalid = false;

    vm.onSubmit = function() {
      if(!vm.mealForm.calories.$valid) {
        vm.targetCaloriesInvalid = true;
      }

      if(vm.mealForm.$valid) {
        vm.displayRecipeDailyCalorie(vm.calorieParams);
      }
    }

    vm.displayRecipeDailyCalorie = function(calorieParams) {
      vm.message = "Loading daily calorie recipes...";

      dailyCalorieData.getDailyCalorie(calorieParams)
        .then(function(meals) {
          if(meals.data.recipeDailyCalorie.meals[0].id) vm.message = "";
          console.log(meals);
          vm.meals = meals.data.recipeDailyCalorie.meals;
          vm.nutrients = meals.data.recipeDailyCalorie.nutrients;
        }, function(e) {
          console.log(e);
        })
    }
  }  
})();