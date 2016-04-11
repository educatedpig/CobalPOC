(function () {

    'use strict';

    var loginModule = angular.module('app.login');

    loginModule.controller('LoginCtrl', LoginCtrl);

    function LoginCtrl ($scope,$location) {

      // Bindings
      var LoginCtrl = this;
      // define variables
      // LoginCtrl.var = 'foo';

      console.log('Login Controller Works!');

      $scope.jumpToDo = function(){
        $location.path('to-do');
      }
      init();

      function init() {
        $('#gn-menu').hide();
        $('#gn-logout').hide();
      }
    }

})(); 
