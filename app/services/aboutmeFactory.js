(function()
{
var aboutmeFactory = function()
{
    var aboutMeHeading = "I'm a graduate student studying in Syracuse University";
    var aboutMeContent =  [
            "Presently I am studying computer science at syracuse university.I am graduating on december 2016.I have more than 2.5 years of experience in web application and software development.I love to code in Java,Python,C++ and javaScipt. My interests are software and web application development,android development and data mining."
         ];
    var factory = {};
    factory.getAboutMeHeading = function(){
        return aboutMeHeading;
    }
    factory.getAboutMeData = function(){
        return aboutMeContent;
    }
    return factory;
};

    angular.module('portfolioApp').factory('aboutmeFactory',aboutmeFactory);
}());