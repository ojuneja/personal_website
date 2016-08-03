(function() {
    
    var projectController = function ($scope,projectFactory) {
         $scope.projectChemAppHeading =  "";
         $scope.projectChemAppContent = [];
         $scope.projectDistAppHeading =  "";
         $scope.projectDistAppContent = [];
         $scope.projectPreManAppHeading =  "";
         $scope.projectPreManContent = [];
         $scope.projectMovieRecommendationAppHeading =  "";
         $scope.projectMovieRecommendationAppContent = [];
         $scope.projectNoSqlAppHeading =  "";
         $scope.projectNoSqlAppContent = [];
         $scope.projectImageAppHeading =  "";
         $scope.projectImageAppContent = [];
        
         function init()
         {
              $scope.projectChemAppHeading = projectFactory.getChemAppHeading();
              $scope.projectChemAppContent = projectFactory.getChemAppContent();
              $scope.projectDistAppHeading = projectFactory.getDistAppHeading();
              $scope.projectDistAppContent = projectFactory.getDistAppContent();
              $scope.projectPreManAppHeading = projectFactory.getPreManAppHeading();
              $scope.projectPreManContent = projectFactory.getPreManAppContent();
              $scope.projectMovieRecommendationAppHeading = projectFactory.getMovieRecommendationAppHeading();
              $scope.projectMovieRecommendationAppContent = projectFactory.getMovieRecommendationAppContent();
              $scope.projectNoSqlAppHeading = projectFactory.getNoSqlAppHeading();
              $scope.projectNoSqlAppContent = projectFactory.getNoSqlAppContent();
              $scope.projectImageAppHeading = projectFactory.getImageAppHeading();
              $scope.projectImageAppContent = projectFactory.getImageAppContent();
         }
        
        init();
       
    };
    
    projectController.$inject = ['$scope','projectFactory'];

    angular.module('portfolioApp')
      .controller('projectController', projectController);
    
}());