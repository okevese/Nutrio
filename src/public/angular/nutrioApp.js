var nutrioApp = angular.module('nutrioApp', []);

nutrioApp.controller('TriviaCtrl', ['$scope', function($scope) {
  $scope.trivia = 'Some trivia about nutrition';
}]);