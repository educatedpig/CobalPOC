(function () {
    'use strict';

    // Gets projectInitiation module
    var projectInitiationModule = angular.module('app.projectInitiation');

    // Attaches projectInitiationConfig function
    projectInitiationModule.config(projectInitiationConfig);

    // Injects dependencies
    projectInitiationConfig.$inject = ['$routeProvider'];

    // Configuration function
    function projectInitiationConfig($routeProvider) {

      $routeProvider
        .when('/project-initiation', {
          templateUrl: 'modules/pages/project-initiation/ProjectInitiationView.html',
          controller: 'ProjectInitiationCtrl',
          controllerAs: 'ProjectInitiationCtrl',
        });
    }
})(); 