'use strict';

angular.module('myApp.SessionListView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SessionListView', {
    templateUrl: 'SessionListView/SessionListView.html',
    controller: 'SessionListViewCtrl'
  });
}])

.controller('SessionListViewCtrl', function($scope, $http, $location) {
    $scope.intro = "My sessions";

    $scope.getRequest = function () {
    console.log("I've been pressed!");  
    $http.get("http://localhost:54854/api/Sessions")
    .then(function successCallback(response){
        $scope.response = response;
        console.log(response);
    }, function errorCallback(response){
        console.log("Unable to perform get request");
    });
 };

 $scope.getRequest();
});