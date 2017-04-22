'use strict';

angular.module('myApp', ['ngRoute']).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.when('/beacons/', {
    controller: 'listBeaconsController',
    templateUrl: 'templates/listBeacons.html'
  }).when('/beacons/:beaconId/', {
    controller: 'beaconDetailController',
    templateUrl: 'templates/beaconDetail.html'
  }).otherwise({
    redirectTo: '/beacons/'
  });
}]);