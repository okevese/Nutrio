angular.module('nutrioApp', ['ngRoute']);

function config($routeProvider) {
  $routeProvider
    .when('/', {
    })
    .otherwise({redirectTo: '/'});
}

angular
  .module('nutrioApp')
  .config(['$routeProvider', config]);