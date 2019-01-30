angular.module('nutrioApp', ['ngRoute']);

function config($routeProvider) {
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
}

angular
  .module('nutrioApp')
  .config(['$routeProvider', config]);