angular.module('nutrioApp', ['ngRoute']);

function config($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'home/home.view.html',
      controller: 'homeCtrl',
      controllerAs: 'vm'
    })
    .otherwise({redirectTo: '/'});
}

angular
  .module('nutrioApp')
  .config(['$routeProvider', config]);