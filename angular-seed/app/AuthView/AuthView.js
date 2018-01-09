'use strict';

angular.module('myApp.AuthView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/AuthView/', {
    templateUrl: 'AuthView/AuthView.html',
    controller: 'AuthViewCtrl'
  });
}])

.controller('AuthViewCtrl', function($scope, $http, $routeParams, $location) {
	$scope.loginUser = () => {

		$location.url('/GamesListView')
	}

});