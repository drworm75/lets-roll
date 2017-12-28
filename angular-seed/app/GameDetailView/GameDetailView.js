'use strict';

angular.module('myApp.GameDetailView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/GameDetailView/:name', {
    templateUrl: 'GameDetailView/GameDetailView.html',
    controller: 'GameDetailViewCtrl'
  });
}])

.controller('GameDetailViewCtrl', function($scope, $http) {
    $scope.intro = "Details of Game {{name}}";
});