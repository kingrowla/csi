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
//$(".navbar").find("[data-toggle=collapse]").click(function(e){
//
//    e.preventDefault();e.stopPropagation();
//    $(".navbar").find(".collapse.in").collapse("hide");
//    $($(this).attr("data-target")).collapse("show");
//
//});
$("#year").text((new Date).getFullYear());
angular
    .module('csiPublicWebsite2015App', [
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ])
    .config(function ($routeProvider, $stateProvider, $urlRouterProvider) {
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
            .when('/help', {
                templateUrl: 'views/help.html',
                controller: 'HelpCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    var partialViewURL = 'views/help-partial-views/';
    $urlRouterProvider.otherwise('/');
    $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('faq1', {
            url: '/faq1',
            templateUrl: partialViewURL+'faq1.html'
        })
        
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('faq2', {
            url: '/faq2',
            templateUrl: partialViewURL+'faq2.html'      
        });
    });