(function() {
  angular
    .module('nutrioApp')
    .controller('dailyCalorieCtrl', dailyCalorieCtrl);

  dailyCalorieCtrl.$inject = ['dailyCalorieData', 'saveMealData'];  
  function dailyCalorieCtrl(dailyCalorieData, saveMealData) {
    var vm = this;
    vm.pageHeader = {
      title: "Daily Calorie Recipes",
      strapline: "Find multiple recipes that, when added up, reach your daily caloric needs."
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
    
    
    vm.saveSelectedMeal = function(meal) {
      if(meal.isChecked) {
        saveMealData.saveMeal({
          id: meal.id,
          title: meal.title,
          readyInMinutes: meal.readyInMinutes,
          servings: meal.servings,
          image: meal.image
        })
      }
    }
    

    vm.displayRecipeDailyCalorie = function(calorieParams) {
      vm.message = "Loading daily calorie recipes...";

      dailyCalorieData.getDailyCalorie(calorieParams)
        .then(function(meals) {
          if(meals.data.meals[0].id) vm.message = "";
          vm.meals = meals.data.meals;
          vm.nutrients = meals.data.nutrients;
          console.log(vm.meals);
        }, function(e) {
          console.log(e);
        })
    }
  }  
})();