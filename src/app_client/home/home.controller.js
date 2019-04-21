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

    vm.breakfastImageUrl = "../home/breakfast.jpg";
    vm.hamImageUrl = "../home/hamburgers.jpg";
    vm.meatballsImageUrl = "../home/meatballs.jpg";

    vm.styleImage = {
      "width": "200px",
      "height": "200px",
      "margin-left": "auto",
      "margin-right": "auto",
      "display": "block",
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