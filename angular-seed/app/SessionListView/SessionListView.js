'use strict';

angular.module('myApp.SessionListView', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/SessionListView', {
    templateUrl: 'SessionListView/SessionListView.html',
    controller: 'SessionListViewCtrl'
  });
}])

.controller('SessionListViewCtrl', function($scope, $http, $uibModal, $location) {
    $scope.intro = "My Sessions";

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
    $http.get("http://localhost:54854/api/Sessions")
    .then(function successCallback(response){
        $scope.response = response;
        console.log($scope.response)
    }, function errorCallback(response){
        console.log("Unable to perform get request");
    });
 };

 $scope.getRequest();
});