'use strict';

angular.module('myApp.GamesListView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/GamesListView', {
    templateUrl: 'GamesListView/GamesListView.html',
    controller: 'GamesListViewCtrl'
  });
}])

.controller('GamesListViewCtrl', function($scope, $http) {
    $scope.intro = "My Games";
    
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

     $scope.getRequest();
 
});