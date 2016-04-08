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

      $scope.jumpProject = function(){
        $location.path('project-initiation');
      }
      init();

      function init() {
        
      }
    }

})(); 