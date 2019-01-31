(function() {

  var triviaData = function($http) {
    return $http.get('/api/v1/trivia');
  }


  angular
    .module('nutrioApp')
    .service('triviaData', triviaData);
})();