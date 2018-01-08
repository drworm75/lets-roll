'use strict';

angular.module('myApp.Popup', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/SessionListView', {
//     templateUrl: 'SessionListView/SessionListView.html',
//     controller: 'SessionListViewCtrl'
//   });
// }])

.controller('PopupCtrl', function($scope, $location, deleteGame, targetUrl, $http, $uibModalInstance) {
    $scope.id = deleteGame;
    $scope.url = targetUrl;
    $scope.close = function () {
        console.log("Trying to cancel");
        console.log("targetUrl", targetUrl);
        $uibModalInstance.dismiss('cancel');
    }

    $scope.deleteItem = () => {
      $http.delete(`${$scope.url}/${$scope.id}`)
      .then(function successCallback(response){
          console.log("response", response);
          $uibModalInstance.dismiss('cancel');
          console.log("check url", $scope.url);
          if ($scope.url == "http://localhost:54854/api/Games")
          {
            $location.url('/GamesListView/');
          }
          else if ($scope.url == "http://localhost:54854/api/Sessions")
          {
            $location.url('/SessionListView/');

          }
      }, function errorCallback(response){
          console.log("Unable to perform delete request");
      });
    };
});