(function () {
    'use strict';
    
    // Gets DocumentUpload module
    var documentUploadModule = angular.module('app.documentUpload');

    // Attaches DocumentUploadConfig function
    documentUploadModule.config(DocumentUploadConfig);

    // Injects dependencies
    DocumentUploadConfig.$inject = ['$routeProvider'];

    // Configuration function
    function DocumentUploadConfig($routeProvider) {

      $routeProvider
        .when('/documentUpload', {
          templateUrl: 'modules/pages/documentUpload/DocumentUploadView.html',
          controller: 'DocumentUploadCtrl',
          controllerAs: 'DocumentUploadCtrl',
        });
    }
})();
