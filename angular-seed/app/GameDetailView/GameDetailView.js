'use strict';

angular.module('myApp.GameDetailView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/GameDetailView/:id', {
    templateUrl: 'GameDetailView/GameDetailView.html',
    controller: 'GameDetailViewCtrl'
  });
}])

.controller('GameDetailViewCtrl', function($scope, $http, $routeParams, $location) {
	var id = $routeParams.id
    $scope.intro = "Details for";
    $scope.getDetails = function (id) {
        $http.get(`http://localhost:54854/api/Games/${id}`)
        .then(function successCallback(response){
            $scope.gameInfo = response.data;
        }, function errorCallback(response){
            console.log("Unable to perform get request");
        });
     };

    $scope.editGame = function () {
      var gameId = $routeParams.id;
      $location.url('/NewGameView/'+gameId);
    }

     $scope.getDetails(id);
});