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

    }).config(function ($stateProvider, $urlRouterProvider) {
        var partialViewURL = 'views/help-partial-views/';
        $stateProvider
            .state('help.faq1', {
                url: '/faq1',
                templateUrl: partialViewURL + 'faq1.html',
            })
            .state('help.faq2', {
                url: '/faq2',
                templateUrl: partialViewURL + 'faq2.html'
            })
            .state('help.faq3', {
                url: '/faq3',
                templateUrl: partialViewURL + 'faq3.html'
            })
            .state('help.faq4', {
                url: '/faq4',
                templateUrl: partialViewURL + 'faq4.html'
            })
            .state('help.faq5', {
                url: '/faq5',
                templateUrl: partialViewURL + 'faq5.html'
            })
            .state('help.faq6', {
                url: '/faq6',
                templateUrl: partialViewURL + 'faq6.html'
            });
    });