'use strict';

angular.
  module('pinpointr').
  config(['$locationProvider' ,'$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/pinpointr', {
          template: '<query-form></query-form>'
        }).
        otherwise('/pinpointr');
    }
  ]);
