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
            when('/camdenRealities', {
                templateUrl: 'html/camdenRealities.html',
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
            when('/educationalSupport', {
                templateUrl: 'html/educationalSupport.html'
            }).
            when('/mentoring', {
                templateUrl: 'html/mentoring.html'
            }).    
            when('/team',{
                templateUrl: 'html/team.html'
            }).
            when('/contact',{
                templateUrl: 'html/contact.html'
            })    
                .otherwise({redirectTo:'/'});
            

        }]);

})();
