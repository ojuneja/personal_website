(function() {
    var generalController =  function ($scope,appSettings) {
        $scope.appSettings = appSettings;
    }
    generalController.$inject = ['$scope','appSettings'];
     angular.module('portfolioApp')
      .controller('generalController', generalController);
}());