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
    'ngAnimate',
    'ngCookies',
    'ngResource',
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
      .otherwise({
        redirectTo: '/'
      });
  });
