'use strict';

/**
 * @ngdoc overview
 * @name csiPublicWebsite2015App
 * @description
 * # csiPublicWebsite2015App
 *
 * Main module of the application.
 */
var headerText = ["THE RESPONSIVE PAYMENT PLATFORM", "PAYMENT PROCESSING", "SIMPLE RECONCILIATION", "FLEXIBLE ADMINISTRATION TOOLS", "DEDICATED CUSTOMER SERVICE"];
$(function () {
    var counter = 1;
    $(".rslides").responsiveSlides({
        timeout: 5000,
        before: function () {
            $("#titleHeader").text(headerText[counter]);
            counter++;
            if (counter == headerText.length) {
                counter = 0;
            }
        }
    });
});

$("#year").text((new Date).getFullYear());
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
            .when('/privacy', {
                templateUrl: 'views/policy.html',
                controller: 'PolicyCtrl'
            })
            .when('/media', {
                templateUrl: 'views/media.html',
                controller: 'MediaCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });