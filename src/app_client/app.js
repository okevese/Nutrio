(function() {
  angular.module('nutrioApp', ['ngRoute']);

  function config($routeProvider, $locationProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'home/home.view.html',
        controller: 'homeCtrl',
        controllerAs: 'vm'
      })
      .when('/meals', {
        templateUrl: '/meal_plan/meal.view.html',
        controller: 'mealPlanCtrl',
        controllerAs: 'vm'
      })
      .when('/daily_calorie', {
        templateUrl: '/daily_calorie/calorie.view.html',
        controller: 'dailyCalorieCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true); 
  }

  angular
    .module('nutrioApp')
    .config(['$routeProvider', '$locationProvider', config]);
})();