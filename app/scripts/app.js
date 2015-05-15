'use strict';

/**
 * @ngdoc overview
 * @name csiPublicWebsite2015App
 * @description
 * # csiPublicWebsite2015App
 *
 * Main module of the application.
 */
angular
  .module('csiPublicWebsite2015App', [
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
     .when('/solution', {
        templateUrl: 'views/solution.html',
        controller: 'SolutionCtrl'
      })
    .when('/media', {
        templateUrl: 'views/media.html',
        controller: 'MediaCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });