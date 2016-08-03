(function() {
    
    var expereincesController = function ($scope,experiencesFactory) {
         $scope.collabworxHeading =  "";
         $scope.collabworxContent = "";
         $scope.collabworxSubHeading = "";
         $scope.cognizantHeading =  "";
         $scope.cognizantSubHeading =  "";
         $scope.cognizantContent = "";
        
         function init()
         {
              $scope.collabworxHeading =  experiencesFactory.getCollabworxHeading();
              $scope.collabworxContent = experiencesFactory.getCollabworxContent();
              $scope.collabworxSubHeading =  experiencesFactory.getCollabworxSubHeading();
              $scope.cognizantHeading =  experiencesFactory.getCognizantHeading();
              $scope.cognizantSubHeading = experiencesFactory.getCognizantSubHeading();
              $scope.cognizantContent = experiencesFactory.getCognizantContent();
         }
        
        init();
       
    };
    
    expereincesController.$inject = ['$scope','experiencesFactory'];

    angular.module('portfolioApp')
      .controller('expereincesController', expereincesController);
    
}());