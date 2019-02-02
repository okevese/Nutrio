(function() {
  angular
    .module('nutrioApp')
    .controller('homeCtrl', homeCtrl);

  homeCtrl.$inject = ['triviaData'];
  function homeCtrl (triviaData) {
    var vm = this;
    vm.pageHeader = {
      title: 'Nutrio',
      strapline: 'Find diets for healthy living'
    };

    vm.message = "Loading food trivia...";
    triviaData
      .then(function(trivia) {
        if(trivia.data.text) vm.message = "";
        vm.trivia = trivia.data.text;
      }, function(e) {
        console.log(e);
      });
  }
  
})();