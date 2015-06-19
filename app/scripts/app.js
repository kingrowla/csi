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

angular.module('csiPublicWebsite2015App', [
    'ngSanitize',
    'ngTouch',
    'ui.router'])
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'views/main.html',
                controller: 'MainCtrl'
            })
            .state('about', {
                url: '/about',
                templateUrl: 'views/about.html',
                controller: 'AboutCtrl'
            })
            .state('solution', {
                url: '/solution',
                templateUrl: 'views/solution.html',
                controller: 'SolutionCtrl'
            })
            .state('privacy', {
                url: '/policy.html',
                templateUrl: 'views/policy.html',
                controller: 'PolicyCtrl'
            })
            .state('media', {
                url: '/media',
                templateUrl: 'views/media.html',
                controller: 'MediaCtrl'
            })
            .state('help', {
                url: '/help',
                templateUrl: 'views/help.html',
                controller: 'HelpCtrl'
            });
    });