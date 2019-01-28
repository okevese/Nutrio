angular
  .module('nutrioApp')
  .controller('homeCtrl', homeCtrl);

function homeCtrl () {
  var vm = this;
  vm.pageHeader = {
    title: 'Nutrio',
    strapline: 'Find diets for healthy living'
  };
}