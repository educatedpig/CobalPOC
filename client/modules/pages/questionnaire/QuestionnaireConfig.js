(function () {
    'use strict';

    // Gets Questionnaire module
    var QuestionnaireModule = angular.module('app.questionnaire');

    // Attaches QuestionnaireConfig function
    QuestionnaireModule.config(QuestionnaireConfig);

    // Injects dependencies
    QuestionnaireConfig.$inject = ['$routeProvider'];

    // Configuration function
    function QuestionnaireConfig($routeProvider) {

      $routeProvider
        .when('/questionnaire', {
          templateUrl: 'modules/pages/questionnaire/QuestionnaireView.html',
          controller: 'QuestionnaireCtrl',
          controllerAs: 'QuestionnaireCtrl',
        })
        .when('/questionnaire/basic-information', {
          templateUrl: 'modules/pages/questionnaire/views/BasicInformation.html',
          controller: 'QuestionnaireCtrl',
          controllerAs: 'QuestionnaireCtrl',
        })
        ;
    }
})();
