// 'use strict';

// angular.module('myApp.EditGameView', ['ngRoute'])

// .config(['$routeProvider', '$httpProvider', function($routeProvider, $httpProvider) {
// 	$httpProvider.defaults.headers.common = {};
// 	$httpProvider.defaults.headers.post = {};
// 	$httpProvider.defaults.headers.put = {
//         "Content-Type": "application/json"
//     };
// 	$httpProvider.defaults.headers.patch = {};
//     $routeProvider.when('/NewGameView/:id', {
//         templateUrl: 'NewGameView/NewGameView.html',
//         controller: 'EditGameViewCtrl'
//     })
// }])

// .controller('EditGameViewCtrl', function($scope, $http, $q, $location, $routeParams) {
//     $scope.intro = "Edit game";
//     $scope.newGame = {};

//     $scope.getDetails = function (id) {
//         console.log("Getting Details");  
//         $http.get(`http://localhost:54854/api/Games/${$routeParams.id}`)
//         .then(function successCallback(response){
//             $scope.newGame = response.data;
//             $scope.newGame.Publisher = {
//                 "Name": $scope.newGame.PublisherName
//             };
//             console.log("$scope.newGame", $scope.newGame);
//         }, function errorCallback(response){
//             console.log("Unable to perform get request");
//         });
//      };

//     $scope.getDetails();

//     $scope.addNewGame = () => {
//         console.log("Button pressed");
//         console.log ("$scope.newGame", $scope.newGame);
//         //$scope.newGame.uid = $rootScope.user.uid;
//         var newGameData = $scope.newGame;
//         delete newGameData.Publisher
//         var gameId = $scope.newGame.Id
//         console.log("newGameData", newGameData);
//         newGameData = JSON.stringify(newGameData);
//         $http({
//             method: 'POST',
//             url: `http://localhost:54854/api/Games`,
//             data: newGameData,
//         }).then(function (success) {
//             console.log("Great Ceasar's Ghost!  The game has posted", success);
//             $location.url('/GamesListView');
//         });
//    };

//  //  $scope.editGame = () => {
//  //  	console.log("Edit button pressed");
//  //  	console.log ("$scope.newGame", $scope.newGame);
//  //    //$scope.newGame.uid = $rootScope.user.uid;
//  // 	var newGameData = $scope.newGame;
// 	// newGameData = JSON.stringify(newGameData);
// 	// $http({
// 	// 	method: 'POST',
// 	// 	url: 'http://localhost:54854/api/Games',
// 	// 	data: newGameData,
// 	// }).then(function (success) {
// 	// 	console.log("Great Ceasar's Ghost!  The game has posted", success);
// 	// 	$location.url('/GamesListView');
// 	// });
//  //   };
// });

//     // $scope.insertCustomer = function () {
//     //     //Fake customer data
//     //     var cust = {
//     //         ID: 10,
//     //         FirstName: 'JoJo',
//     //         LastName: 'Pikidily'
//     //     };
//     //     dataFactory.insertCustomer(cust)
//     //         .then(function (response) {
//     //             $scope.status = 'Inserted Customer! Refreshing customer list.';
//     //             $scope.customers.push(cust);
//     //         }, function(error) {
//     //             $scope.status = 'Unable to insert customer: ' + error.message;
//     //         });
//     // };

//     //     dataFactory.insertCustomer = function (cust) {
//     //     return $http.post(urlBase, cust);
//     // };

// // let postNewItem = (newItem) => {
// //     return $q ((resolve, reject) => {
// //       $http.post(`${FIREBASE_CONFIG.databaseURL}/items.json`, JSON.stringify(newItem))
// //       .then((results) => {
// //         resolve(results);
// //       })
// //       .catch((error) => {
// //         reject(error);
// //       });
// //     });
// //   };