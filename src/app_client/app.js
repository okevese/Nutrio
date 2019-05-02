(function() {
  angular.module('nutrioApp', ['ngRoute', 'routeStyles']);

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
        controllerAs: 'vm',
        css: '../public/stylesheets/style.css'
      })
      .when('/daily_calorie', {
        templateUrl: '/daily_calorie/calorie.view.html',
        controller: 'dailyCalorieCtrl',
        controllerAs: 'vm',
        css: ['../public/stylesheets/style.css', '/daily_calorie/calorie.css']
      })
      .when('/replace_ingredient', {
        templateUrl: '/replace_ingredient/ingredient.view.html',
        controller: 'replaceIngredientCtrl',
        controllerAs: 'vm'
      })
      .when('/instructions/:mealid', {
        templateUrl: '/recipe_instructions/instructions.view.html',
        controller: 'instructionsCtrl',
        controllerAs: 'vm'
      })
      .when('/user/:userid', {
        templateUrl: '/user/user.view.html',
        controller: 'userCtrl',
        controllerAs: 'vm'
      })
      .otherwise({redirectTo: '/'});
    $locationProvider.html5Mode(true); 
  }

  angular
    .module('nutrioApp')
    .config(['$routeProvider', '$locationProvider', config]);
})();