'use strict';

angular.module('myApp.NewGameView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/NewGameView', {
    templateUrl: 'NewGameView/NewGameView.html',
    controller: 'NewGameViewCtrl'
  });
}])

.controller('NewGameViewCtrl', function($scope, $http) {
    $scope.intro = "Enter a new game";
});