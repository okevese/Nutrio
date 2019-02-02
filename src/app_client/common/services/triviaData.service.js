(function() {

  angular
    .module('nutrioApp')
    .service('triviaData', triviaData);

  triviaData.$inject = ['$http'];
  function triviaData($http) {
    return $http.get('/api/v1/trivia');
  }
})();