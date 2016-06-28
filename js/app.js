/**
 * Created by harsh on 6/26/2016.
 */
(function () {
    'use strict';
    var myApp = angular.module('angularApp', ['ngRoute','ngAnimate','ui.bootstrap'])
        .config(['$routeProvider', function($routeProvider) {
            $routeProvider.
            when('/', {
                templateUrl: 'html/home.html'
            }).
            when('/home', {
                templateUrl: 'html/home.html'
            }).
            when('/story', {
                templateUrl: 'html/story.html',

            }).
            when('/mission', {
                templateUrl: 'html/mission.html'
            }).
            when('/process', {
                templateUrl: 'html/process.html'
            }).
            when('/programs', {
                templateUrl: 'html/programs.html'
            }).
            when('/scholarship', {
                templateUrl: 'html/scholarship.html'
            }).
            when('/team',{
                templateUrl: 'html/team.html'
            })
                .otherwise({redirectTo:'/'});

        }]);

})();
