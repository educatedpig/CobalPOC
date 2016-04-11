(function () {

    'use strict';

    var toDoModule = angular.module('app.toDo');

    toDoModule.controller('ToDoCtrl', ToDoCtrl);

    function ToDoCtrl () {

      // Bindings
      var ToDoCtrl = this;
      // define variables
      // ToDoCtrl.var = 'foo';

      console.log('ToDo Controller Works!');

      init();

      function init() {
        
      }
    }

})(); 