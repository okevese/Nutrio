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

    vm.imageUrl = "../home/breakfast.jpg";

    vm.styleHeaderImage = {
      "display": "block",
      "margin-left": "auto",
      "margin-right": "auto",
      "vertical-align": "middle",
      "height": "auto",
      "max-width": "100%",
      "border": "0",
      "box-sizing": "border-box",
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