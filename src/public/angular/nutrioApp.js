angular.module('nutrioApp', []);

var triviaCtrl = function($scope, triviaData) {
  $scope.message = "Getting food trivia...";
  triviaData
    .then(function(trivia) {
      if(trivia.data.text) $scope.message = "";
      $scope.trivia = trivia.data.text;
    }, function(e) {
      console.log(e);
    });
};

var triviaData = function($http) {
  return $http.get('/api/v1/trivia');
}


angular
  .module('nutrioApp')
  .controller('triviaCtrl', triviaCtrl)
  .service('triviaData', triviaData);