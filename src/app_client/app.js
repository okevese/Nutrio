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
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true);  
  }

  angular
    .module('nutrioApp')
    .config(['$routeProvider', '$locationProvider', config]);
})();