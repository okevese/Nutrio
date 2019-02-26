(function() {
  angular
    .module('nutrioApp')
    .controller('mealPlanCtrl', mealPlanCtrl);

  mealPlanCtrl.$inject = ['mealPlanData'];  
  function mealPlanCtrl(mealPlanData) {
    var vm = this;
    vm.pageHeader = {
      title: 'Meal Plan',
      strapline: 'Generate a meal plan with three meals per day!'
    };

    vm.styleMealplanInput = {
      "background-color": "#3cb9c6",
      "border-color": "transparent", 
      "border-radius": "10px"
    };

    vm.mealParams = {
      timeFrame: 'day'
    };

    // Initializes ng-show directive for form validation of diet and calories fields
    vm.dietInvalid = false;
    vm.targetCaloriesInvalid = false;

    vm.onSubmit = function() {
      // Sets the values of both ng-show directives if the form is invalid,i.e empty fields
      if(!vm.mealForm.diet.$valid) {
        vm.dietInvalid = true;
      }
      if(!vm.mealForm.calories.$valid) {
        vm.targetCaloriesInvalid = true;
      }
      if(vm.mealForm.$valid) {
        vm.displayDailyMealPlan(vm.mealParams);
      }
    }

    vm.displayDailyMealPlan = function(mealParams) {
      vm.message = "Loading meal plan...";

      mealPlanData.getMeals(mealParams)
        .then(function(meals) {
          if(meals.data.mealPlan._id) vm.message = "";
          vm.meals = meals.data.mealPlan.meals;
          vm.nutrients = meals.data.mealPlan.nutrients;
        }, function(e) {
          vm.message = "Error while loading meals";
          console.log(e);
        })
    }    
  }  
})();