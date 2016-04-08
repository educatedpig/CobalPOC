(function () {

    'use strict';

    var loginModule = angular.module('app.login');

    loginModule.controller('LoginCtrl', LoginCtrl);

    function LoginCtrl () {

      // Bindings
      var LoginCtrl = this;
      // define variables
      // LoginCtrl.var = 'foo';

      console.log('Login Controller Works!');

      init();

      function init() {
        
      }
    }

})(); 