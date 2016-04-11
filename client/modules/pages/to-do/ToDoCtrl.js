(function () {

    'use strict';

    var toDoModule = angular.module('app.toDo');

    toDoModule.controller('ToDoCtrl', ToDoCtrl);

    function ToDoCtrl ($scope,$location) {

      // Bindings
      var ToDoCtrl = this;
      // define variables
      // ToDoCtrl.var = 'foo';

      console.log('ToDo Controller Works!');

      $scope.jumpToQuestionnaire = function(){
        $('#gn-menu').show();
        $('#gn-logout').show();
        $location.path('questionnaire');
      }

      init();

      function init() {
        
      }
    }

})(); 