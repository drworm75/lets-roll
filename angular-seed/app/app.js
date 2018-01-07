'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', [
  'ngRoute',
  'ui.bootstrap',
  'myApp.GamesListView',
  'myApp.SessionListView',
  'myApp.GameDetailView',
  'myApp.NewGameView',
  'myApp.NewSessionView',
  'myApp.Popup',
  'myApp.version'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/GamesListView'});
}]);
