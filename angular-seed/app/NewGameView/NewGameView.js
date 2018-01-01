'use strict';

angular.module('myApp.NewGameView', ['ngRoute'])

.config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
	$httpProvider.defaults.headers.common = {};
	$httpProvider.defaults.headers.post = {
		"Content-Type": "application/json"
	};
	$httpProvider.defaults.headers.put = {};
	$httpProvider.defaults.headers.patch = {};
	$routeProvider.when('/NewGameView', {
		templateUrl: 'NewGameView/NewGameView.html',
		controller: 'NewGameViewCtrl'
	});
}])

.controller('NewGameViewCtrl', function($scope, $http, $q) {
    $scope.intro = "Enter a new game";

  $scope.addNewGame = () => {
  	console.log("Button pressed");
  	console.log ("$scope.newGame", $scope.newGame);
    //$scope.newGame.uid = $rootScope.user.uid;
 	var newGameData = $scope.newGame;
 //    var newGameData = {
	//     Name: "Illuminati",
	//     MinPlayers: 2,
	//     MaxPlayers: 8,
	//     PlayTime: 60,
	//     Age: 12,
	//     Publisher: 
	//     {
	//     	Name: "Steve Jackson Games"
	// 	}
	// };
	newGameData = JSON.stringify(newGameData);
	$http({
		method: 'POST',
		url: 'http://localhost:54854/api/Games',
		data: newGameData,
	}).then(function (success) {
		console.log("Great Ceasar's Ghost!  The game has posted", success);
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

    // $scope.insertCustomer = function () {
    //     //Fake customer data
    //     var cust = {
    //         ID: 10,
    //         FirstName: 'JoJo',
    //         LastName: 'Pikidily'
    //     };
    //     dataFactory.insertCustomer(cust)
    //         .then(function (response) {
    //             $scope.status = 'Inserted Customer! Refreshing customer list.';
    //             $scope.customers.push(cust);
    //         }, function(error) {
    //             $scope.status = 'Unable to insert customer: ' + error.message;
    //         });
    // };

    //     dataFactory.insertCustomer = function (cust) {
    //     return $http.post(urlBase, cust);
    // };

// let postNewItem = (newItem) => {
//     return $q ((resolve, reject) => {
//       $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
//       .then((results) => {
//         resolve(results);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//     });
//   };