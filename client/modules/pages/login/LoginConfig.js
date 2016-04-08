(function () {
    'use strict';

    // Gets login module
    var loginModule = angular.module('app.login');

    // Attaches loginConfig function
    loginModule.config(loginConfig);

    // Injects dependencies
    loginConfig.$inject = ['$routeProvider'];

    // Configuration function
    function loginConfig($routeProvider) {

      $routeProvider
        .when('/login', {
          templateUrl: 'modules/pages/login/LoginView.html',
          controller: 'LoginCtrl',
          controllerAs: 'LoginCtrl',
        });
    }
})(); 