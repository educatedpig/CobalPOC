'use strict';

/**
* Questionnaire Resource
* Used to do data operation with a Questionnaire instance
*/

var questionnaireModule = angular.module('app.questionnaire');

questionnaireModule.service('QuestionnaireModel', QuestionnaireModel);

QuestionnaireModel.$inject = ['localStorageService'];

function QuestionnaireModel(localStorageService) {

  var QuestionnaireCreate = QuestionnaireCreate;
  var QuestionnaireRead = QuestionnaireRead;

  return {
    create : QuestionnaireCreate,
    read : QuestionnaireRead,
  };

  function QuestionnaireCreate(questionnaireData) {

    localStorageService.set('questionnaireData',questionnaireData);

    return localStorageService.get('questionnaireData');
  }

  function QuestionnaireRead() {

    return localStorageService.get('questionnaireData');
  }   

}