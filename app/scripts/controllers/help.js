'use strict';
/**
 * @ngdoc function
 * @name csiPublicWebsite2015App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the csiPublicWebsite2015App
 */
angular.module('csiPublicWebsite2015App')
    .controller('HelpCtrl', function ($scope) {
        $("html, body").animate({
            scrollTop: 0
        }, 200);
        $('.rslidesContainer').hide();

    })
    .controller('FaqCtrl', function ($scope) {
        $("html, body").animate({
            scrollTop: 100
        }, 200);
       

    })
    .config(function ($stateProvider, $urlRouterProvider) {
        var partialViewURL = 'views/help-partial-views/';
        $stateProvider
            .state('help.faq1', {
                url: '/faq1',
                templateUrl: partialViewURL + 'faq1.html',
                controller: 'FaqCtrl'
            })
            .state('help.faq2', {
                url: '/faq2',
                templateUrl: partialViewURL + 'faq2.html',
                controller: 'FaqCtrl'
            })
            .state('help.faq3', {
                url: '/faq3',
                templateUrl: partialViewURL + 'faq3.html',
                controller: 'FaqCtrl'
            })
            .state('help.faq4', {
                url: '/faq4',
                templateUrl: partialViewURL + 'faq4.html',
                controller: 'FaqCtrl'
            })
            .state('help.faq5', {
                url: '/faq5',
                templateUrl: partialViewURL + 'faq5.html',
                controller: 'FaqCtrl'
            })
            .state('help.faq6', {
                url: '/faq6',
                templateUrl: partialViewURL + 'faq6.html',
                controller: 'FaqCtrl'
            });
    });