/*
 Boilerplate for AngularJS 1.2.23
 Copyright (c) 2014 Luis Enrique Arriojas
 http://opensource.org/licenses/MIT
 */
'use strict';

var hioControllers = angular.module('hioControllers', []);

hioControllers.controller('hioCtrl', ['$scope', 'Meta',
    function($scope, Meta) {
        $scope.hioMeta = Meta.tags;
    }
]);

hioControllers.controller('homeCtrl', ['$scope', 'Meta', '$http',
    function($scope, Meta, $http) {
        $scope.hioMeta = Meta.tags;
        $scope.hioMeta.description = "";
        $scope.hioMeta.title = "Home";

        $http({
            method: "GET",
            url: "data/home.json"
        }).success(function(data, status, headers, config) {
            $scope.homeContent = data;
        });
    }
]);

hioControllers.controller('aboutCtrl', ['$scope', 'Meta', '$routeParams',
    function($scope, Meta, $routeParams) {
        $scope.hioMeta = Meta.tags;
        $scope.hioMeta.description = "";
        $scope.hioMeta.title = "About";

        $scope.aboutContent = $routeParams.message;
    }
]);