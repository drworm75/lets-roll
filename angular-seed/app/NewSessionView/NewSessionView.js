'use strict';

angular.module('myApp.NewSessionView', ['ngRoute'])

.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	// $httpProvider.defaults.headers.common = {};
	// $httpProvider.defaults.headers.post = {
	// 	"Content-Type": "application/json"
	// };
	// $httpProvider.defaults.headers.put = {};
	// $httpProvider.defaults.headers.patch = {};
	$routeProvider.when('/NewSessionView/:id', {
		templateUrl: 'NewSessionView/NewSessionView.html',
		controller: 'NewSessionViewCtrl'
	});
}])

.controller('NewSessionViewCtrl', function($scope, $http, $q, $location, $routeParams) {
    $scope.intro = "Enter a new session";

  //$scope.addNewSession = () => {
  	//console.log ("$scope.newSession", $scope.newSession);
    //$scope.newGame.uid = $rootScope.user.uid;
 	//var newSessionData = $scope.newSession;
 //    var newSessionData = {
	//     Date: "2005/10/31",
	//     Location: "Home",
	//     GameId: 3
	// };
	$scope.addNewSession = () => {
		var newSessionData = $scope.newSession;
		newSessionData.GameId = $routeParams.id;
	  	console.log("Button pressed newSessionData = ", newSessionData);

		newSessionData = JSON.stringify(newSessionData);
		$http({
			method: 'POST',
			url: 'http://localhost:54854/api/Sessions',
			data: newSessionData,
		}).then(function (success) {
			console.log("Great Ceasar's Ghost!  The session has posted", success);
			$location.url('/GameListView');
		});
		    //   $http.post(`http://localhost:54854/api/Games`)
		    //   .then((results) => {
		    //     resolve(results);
		    //   })
		    //   .catch((error) => {
		    //     reject(error);
		    //   }).catch((error) => {
		    //   console.log("Add error", error);
		    // });
		};
});