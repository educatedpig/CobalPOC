(function () {

    'use strict';

    var projectInitiationModule = angular.module('app.projectInitiation');

    projectInitiationModule.controller('ProjectInitiationCtrl', ProjectInitiationCtrl);

    function ProjectInitiationCtrl () {

      // Bindings
      var ProjectInitiationCtrl = this;
      // define variables
      // ProjectInitiationCtrl.var = 'foo';

      console.log('ProjectInitiation Controller Works!');

      init();

      function init() {
        
      }
    }

})(); 