(function () {
    'use strict';
    angular.module('app').controller('AppCtrl', [
        '$scope', '$location', '$rootScope', '$route', '$document', function($scope, $location, $rootScope, $route, $document) {
            console.log($location);
            console.log($route);
        }
    ]);
})(); 

