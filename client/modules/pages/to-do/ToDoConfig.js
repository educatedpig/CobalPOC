(function () {
    'use strict';

    // Gets toDo module
    var toDoModule = angular.module('app.toDo');

    // Attaches toDoConfig function
    toDoModule.config(toDoConfig);

    // Injects dependencies
    toDoConfig.$inject = ['$routeProvider'];

    // Configuration function
    function toDoConfig($routeProvider) {

      $routeProvider
        .when('/to-do', {
          templateUrl: 'modules/pages/to-do/ToDoView.html',
          controller: 'ToDoCtrl',
          controllerAs: 'ToDoCtrl',
        });
    }
})(); 