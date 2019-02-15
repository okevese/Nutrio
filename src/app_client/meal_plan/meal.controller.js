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

    vm.mealParams = {
      diet: 'vegetarian',
      exclude: 'shellfish, olives',
      targetCalories: 2000,
      timeFrame: 'day'
    };

    vm.message = "Loading meal plan...";
    mealPlanData.getMeals(vm.mealParams)
      .then(function(meals) {
        console.log(meals.data.mealPlan.meals);
        if(meals.data.mealPlan._id) vm.message = "";
        vm.meals = meals.data.mealPlan.meals;
        vm.nutrients = meals.data.mealPlan.nutrients;
      }, function(e) {
        console.log(e);
      })
  }  
})();