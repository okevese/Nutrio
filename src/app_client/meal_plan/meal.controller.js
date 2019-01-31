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
    vm.message = "Loading meal plan...";
    mealPlanData
      .then(function(meals) {
        if(meals.mealPlan.meals[0].id) vm.message = "";
        vm.meals = meals.mealPlan;
      }, function(e) {
        console.log(e);
      })
  }  
})();