(function() {
  angular
    .module('nutrioApp')
    .service('userData', userData);

  userData.$inject = ['$http'];

  function userData($http) {
    var getMeals = function() {
      return $http({
        method: "GET",
        url: "api/v1/meals"
      })
    };

    return {
      getMeals: getMeals
    };
  }

})();