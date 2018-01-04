'use strict';

angular.module('myApp.GamesListView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/GamesListView', {
    templateUrl: 'GamesListView/GamesListView.html',
    controller: 'GamesListViewCtrl'
  });
}])

.controller('GamesListViewCtrl', function($scope, $http, $location) {
    $scope.intro = "My Games";
    
    $scope.getRequest = function () {
        console.log("I've been pressed!");  
        $http.get("http://localhost:54854/api/Games")
        .then(function successCallback(response){
            $scope.response = response;
            console.log(response);
        }, function errorCallback(response){
            console.log("Unable to perform get request");
        });
     };

     $scope.getRequest();

    $scope.gotoAddGame = () => {
      console.log("Button!")
      $location.url('/NewGameView');
    };

    $scope.gotoAddSession = (GameId) => {
      console.log("Here's that game Id you wanted...", GameId);
      //$scope.GameId = GameId;
      // $scope.send = function() {
      //   console.log ("Calling factory");
      //   dataShare.sendData($scope.GameID);
      // }
    $location.url('/NewSessionView/'+GameId);
    };
  })

// .factory('dataShare',function($rootScope){
//   var service = {};
//   service.data = false;
//   service.sendData = function(data){
//       this.data = data;
//       console.log = ("this.data is...", this.data = data);

//       $rootScope.$broadcast('data_shared');
//   };
//   service.getData = function(){
//     return this.data;
//   };
//   return service;

//});