(function()
{
var experienceFactory = function()
{
    var collabworxHeading = "Collab-Worx Inc.";
    var collabworxSubHeading = "Software Developer Co-Op, Feb 2016 - Apr 2016";
    var collabworxContent =  [
            "I have done co-op in collabworx inc. located in syracuse, newyork. There i have redesigned schema to store meeting, user and user groups information by using hibernate. I have developed REST api calls added on the Java (JAX-RS with Jersey) side to show user and meeting information on messenger"
         ];
    
    var cognizantHeading = "Cognizant Technology Solutions";
     var cognizantSubHeading = "Programmer Analyst, May 2012 - Nov 2014";
    var cognizantContent =  ["I have worked as programmer analyst/ software developer in Cognizant located in india. I have designed and developed business layer using Java Spring framework in the product listing page and product information page of home depot website. I have also developed some prototypes and portals in spring framework and angular.js"
            
         ];
    var factory = {};
    
    factory.getCollabworxHeading = function(){
        return collabworxHeading;
    }
    factory.getCollabworxSubHeading = function(){
        return collabworxSubHeading;
    }
    factory.getCollabworxContent = function(){
        return collabworxContent;
    }
    
    factory.getCognizantHeading = function(){
        return cognizantHeading;
    }
    factory.getCognizantSubHeading = function(){
        return cognizantSubHeading;
    }
    factory.getCognizantContent = function(){
        return cognizantContent;
    }
    return factory;
};

    angular.module('portfolioApp').factory('experiencesFactory',experienceFactory);
}());