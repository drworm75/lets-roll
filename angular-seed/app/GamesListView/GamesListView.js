'use strict';

angular.module('myApp.GamesListView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/GamesListView', {
    templateUrl: 'GamesListView/GamesListView.html',
    controller: 'GamesListViewCtrl'
  });
}])

.controller('GamesListViewCtrl', function($uibModal, $scope, $http, $location) {
    $scope.intro = "My Games";
    $scope.response = "";

    $scope.open = function (idForGameToDelete, url) {

      var modalInstance = $uibModal.open({
        templateUrl: 'Popup/Popup.html',
        controller: 'PopupCtrl',
        resolve: {
          deleteGame: function() {
            return idForGameToDelete;
          },
          targetUrl: function() {
            return url;
          }
        }
    });
  };
    
    $scope.getRequest = function () {
        $http.get("http://localhost:54854/api/Games")
        .then(function successCallback(response){
            $scope.response = response;
        }, function errorCallback(response){
            console.log("Unable to perform get request");
        });
     };

    $scope.getRequest();

    $scope.gotoAddGame = () => {
      $location.url('/NewGameView');
    };

    $scope.gotoAddSession = (GameId) => {
      $location.url('/NewSessionView/'+GameId);
    };
  });
