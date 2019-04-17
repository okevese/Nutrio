(function () {
  angular
    .module('nutrioApp')
    .service('saveMealData', saveMealData);

  saveMealData.$inject = ['$http'];
  
  function saveMealData($http) {
    var saveMeal = function(meal) {
      console.log(meal);
      return $http({
        method: "POST",
        url: '/api/v1/meal',
        data: meal
      })
    };

    return {
      saveMeal: saveMeal
    };
  }
})();