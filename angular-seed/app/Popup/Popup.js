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
        $uibModalInstance.dismiss('cancel');
    }

    $scope.deleteItem = () => {
      $http.delete(`${$scope.url}/${$scope.id}`)
      .then(function successCallback(response){
          $uibModalInstance.dismiss('cancel');
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