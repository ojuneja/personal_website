(function() {
    
    var aboutmeController = function ($scope,aboutmeFactory) {
         $scope.aboutmeHeading =  "";
         $scope.aboutmeData = [];
        
         function init()
         {
              $scope.aboutmeHeading =  aboutmeFactory.getAboutMeHeading();
              $scope.aboutmeData = aboutmeFactory.getAboutMeData();
         }
        
        init();
       
    };
    
    aboutmeController.$inject = ['$scope','aboutmeFactory'];

    angular.module('portfolioApp')
      .controller('aboutmeController', aboutmeController);
    
}());