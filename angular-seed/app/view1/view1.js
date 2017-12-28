'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', function($scope, $http) {
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