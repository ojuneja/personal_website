(function()
{
var projectFactory = function()
{
    var chemApp = "Chemistry Flashcards App";
    var chemAppContent =  [
            "This is an android app where users can make flashcards and customize flashcards using camera. Users can login through facebook, search data in flashcards and see performance matrix on pie-charts."
         ];
    
    var distApp = "Distributed File Management Facility";
    var distAppContent =  [
            "A multithreaded software using sockets which allows client to upload, download files, explore directory subtree with recursive file scan, discovers duplicate files and identify files for specific text within files in different remote servers."
         ];
    
    var preManApp = "Prediction and Management of Virtual Machines";
    var preManAppContent =  [ "A software which uses machine learning methods to predicts the resource usage of Virtual Machine and makes connection to the server using VSphere SDK 5.5 to place the VM on another server if resource usage exceeds a given threshold."
         ];
    
    
    var movieRecommendationApp = "Movie Recommendation System";
    var movieRecommendationAppContent = ["A system developed in java that uses collaborative filtering technique with k-nearest neighbour providing recommendations to given user based on his taste/preference by making the use of ratings using 100K movie lens dataset."];
    
    var noSqlApp = "Remote NoSQL Database";
    var noSqlAppContent = ["A No SQL database and a communication channel using WCF where multiple clients can remotely send, add, edit, persist and query data to remote server."];
    
    var imageApp = "Image Recognition";
    var imageAppContent = ["A Recognition system developed in python that classifies image in three classes using neural networks and SVM."];
    
    var factory = {};
    
    factory.getChemAppHeading = function(){
        return chemApp;
    }
    factory.getChemAppContent = function(){
        return chemAppContent;
    }
    
    factory.getDistAppHeading = function(){
        return distApp;
    }
    factory.getDistAppContent = function(){
        return distAppContent;
    }
    
    factory.getPreManAppHeading = function(){
        return preManApp;
    }
    factory.getPreManAppContent = function(){
        return preManAppContent;
    }
    
    factory.getMovieRecommendationAppHeading = function(){
        return movieRecommendationApp;
    }
    factory.getMovieRecommendationAppContent = function(){
        return movieRecommendationAppContent;
    }
    
    factory.getNoSqlAppHeading = function(){
        return noSqlApp;
    }
    factory.getNoSqlAppContent = function(){
        return noSqlAppContent;
        } 
    
    factory.getImageAppHeading = function(){
        return imageApp;
    }
    factory.getImageAppContent = function(){
        return imageAppContent;
    }
    
    return factory;
};

    angular.module('portfolioApp').factory('projectFactory',projectFactory);
}());