(function () {

    'use strict';

    var loginModule = angular.module('app.login');

    loginModule.controller('LoginCtrl', LoginCtrl);

    function LoginCtrl ($scope) {

      // Bindings
      var LoginCtrl = this;
      // define variables
      // LoginCtrl.var = 'foo';

      console.log('Login Controller Works!');

      $scope.jumpProject = function(){
        
        document.location.href="http://127.0.0.1:9001/#/project-initiation"
      }
      init();

      function init() {
        
      }
    }

})(); 