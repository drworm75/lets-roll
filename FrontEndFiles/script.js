var testApp = angular.module('testApp', []);

testApp.controller('testController' , function ($scope, $http) {
    $scope.home = "This is the homepage";
    
    $scope.getRequest = function () {
        console.log("I've been pressed!");  
        $http.get("http://localhost:54854/api/Games")
            .then(function successCallback(response){
                $scope.response = response;
                console.log(response);
            }, function errorCallback(response){
                console.log("Unable to perform get request");
            });
    };
    
});