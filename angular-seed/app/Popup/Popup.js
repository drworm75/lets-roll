'use strict';

angular.module('myApp.Popup', ['ngRoute'])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/SessionListView', {
//     templateUrl: 'SessionListView/SessionListView.html',
//     controller: 'SessionListViewCtrl'
//   });
// }])

.controller('PopupCtrl', function($scope, $location, deleteGame, $http, $uibModalInstance) {
    $scope.id = deleteGame;
    $scope.close = function () {
        console.log("Trying to cancel");
        $uibModalInstance.dismiss('cancel');
    }

    $scope.deleteItem = () => {
      $http.delete(`http://localhost:54854/api/Games/${$scope.id}`)
      .then(function successCallback(response){
          console.log("response", response);
          $uibModalInstance.dismiss('cancel');
          $location.url('/GamesListView/');
      }, function errorCallback(response){
          console.log("Unable to perform delete request");
      });
    };
});