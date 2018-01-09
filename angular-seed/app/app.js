'use strict';

angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.GamesListView',
  'myApp.SessionListView',
  'myApp.GameDetailView',
  'myApp.NewGameView',
  'myApp.NewSessionView',
  'myApp.AuthView',
  'myApp.Popup',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/AuthView'});
}]);
