/*
 Boilerplate for AngularJS 1.2.23
 Copyright (c) 2014 Luis Enrique Arriojas
 http://opensource.org/licenses/MIT
 */
'use strict';

var hioApp = angular.module('hioApp', ['ngRoute', 'hioControllers', 'hioServices']);

/* router */
hioApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/home', {
            templateUrl: 'templates/home.html',
            controller: 'homeCtrl'
        }).
        when('/about/:message', {
            templateUrl: 'templates/about.html',
            controller: 'aboutCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });
    }
]);

/* fix to crawlers */
hioApp.config(['$locationProvider',
    function($locationProvider) {
        $locationProvider.html5Mode(false).hashPrefix('!');
    }
]);

/* services */
var hioServices = angular.module('hioServices', []);

hioServices.factory('Meta', [

    function() {
        return {
            tags: {
                description: '',
                title: ''
            }
        }
    }
]);
