angular.module('nutrioApp', []);

var triviaCtrl = function($scope) {
  $scope.trivia = "Something smartass about nutrition";
}

angular
  .module('nutrioApp')
  .controller('TriviaCtrl', triviaCtrl);