(function() {
  angular
    .module('nutrioApp')
    .controller('mealPlanCtrl', mealPlanCtrl);

  mealPlanCtrl.$inject = ['$rootScope', 'mealPlanData', 'saveMealData'];  
  function mealPlanCtrl($rootScope, mealPlanData, saveMealData) {

    var vm = this;
    vm.pageHeader = {
      title: 'Meal Plan',
      strapline: 'Generate a meal plan with three meals per day!'
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

    vm.selectedMealTitle = function(title) {
      $rootScope.mealTitle = title; /* Do not be hasty, that is my motto ~ Treebeard */
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
    

    vm.displayDailyMealPlan = function(mealParams) {
      vm.message = "Loading meal plan...";
      
      mealPlanData.getMeals(mealParams)
        .then(function(meals) {
          if(meals.data.meals[0].id) vm.message = "";
          vm.meals = meals.data.meals;
          vm.nutrients = meals.data.nutrients;
         
        }, function(e) {
          vm.message = "Error while loading meals";
          console.log(e);
        })
    }    
  }  
})();