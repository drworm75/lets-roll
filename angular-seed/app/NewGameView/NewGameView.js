'use strict';

angular.module('myApp.NewGameView', ['ngRoute'])

.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {
		"Content-Type": "application/json"
	};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
	$routeProvider
    .when('/NewGameView', {
		templateUrl: 'NewGameView/NewGameView.html',
		controller: 'NewGameViewCtrl'
	});
}])

.controller('NewGameViewCtrl', function($scope, $http, $q, $location) {
    $scope.intro = "Enter a new game";

  $scope.addNewGame = () => {
 	var newGameData = $scope.newGame;
	newGameData = JSON.stringify(newGameData);
	$http({
		method: 'POST',
		url: 'http://localhost:54854/api/Games',
		data: newGameData,
	}).then(function (success) {
		$location.url('/GamesListView');
	});
   };
});