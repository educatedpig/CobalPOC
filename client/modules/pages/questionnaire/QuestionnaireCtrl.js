(function () {

    'use strict';

    var QuestionnaireModule = angular.module('app.questionnaire');

    QuestionnaireModule.controller('QuestionnaireCtrl', QuestionnaireCtrl);

    function QuestionnaireCtrl () {

      // Bindings
      var QuestionnaireCtrl = this;
      QuestionnaireCtrl.currentActive = '';
      // define variables
      // QuestionnaireCtrl.var = 'foo';

      console.log('Questionnaire Controller Works!');

      QuestionnaireCtrl.isActive = function(navItem) {
        return QuestionnaireCtrl.currentActive === navItem;
      }

      QuestionnaireCtrl.setActive = function(navItem) {
        QuestionnaireCtrl.currentActive = navItem;
      }

      init();

      function init() {
        $('#gn-menu').show();
        $('#gn-logout').show();
      }
    }

})();
