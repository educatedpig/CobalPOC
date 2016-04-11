(function () {

    'use strict';

    var QuestionnaireModule = angular.module('app.questionnaire');

    QuestionnaireModule.controller('QuestionnaireCtrl', QuestionnaireCtrl);

    function QuestionnaireCtrl () {

      // Bindings
      var QuestionnaireCtrl = this;
      // define variables
      // QuestionnaireCtrl.var = 'foo';

      console.log('Questionnaire Controller Works!');

      init();

      function init() {

      }
    }

})();
