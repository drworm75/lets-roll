'use strict';

angular.module('myApp.NewSessionView', ['ngRoute'])

.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	$routeProvider.when('/NewSessionView/:id', {
		templateUrl: 'NewSessionView/NewSessionView.html',
		controller: 'NewSessionViewCtrl'
	});
}])

.controller('NewSessionViewCtrl', function($scope, $http, $q, $location, $routeParams) {
    $scope.intro = "Enter a new session";

	$scope.addNewSession = () => {
		var newSessionData = $scope.newSession;
		newSessionData.GameId = $routeParams.id;
		newSessionData = JSON.stringify(newSessionData);
		$http({
			method: 'POST',
			url: 'http://localhost:54854/api/Sessions',
			data: newSessionData,
		}).then(function (success) {
			console.log("The session has posted", success);
			$location.url('/SessionListView');
		});
	};
});