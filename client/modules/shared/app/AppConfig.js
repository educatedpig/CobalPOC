(function () {
    'use strict';

    /**
    * @description - Configuration for app module
    */

    // Gets app module
    var appModule = angular.module('app');

    // Attaches AppConfig function
    appModule.config(AppConfig);

    // Injects dependencies
    AppConfig.$inject = ['$routeProvider', 'RestangularProvider'];

    // Configuration function
    function AppConfig($routeProvider, RestangularProvider) {

      $routeProvider
        .when('/', {
          redirectTo: '/login'
        })

      // set base url for all Restangular requests. Also see Gruntfile for proxy information on how to connect to the backend
      RestangularProvider.setDefaultHeaders({
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": 'Bearer 916c1cff337458f98ffa7c6ddc403ec2fd710201'
      });

      RestangularProvider.setBaseUrl('/');


      // add a response intereceptor
      RestangularProvider.addResponseInterceptor(function(data, operation, what, url, response, deferred) {
          
        var extractedData;
        // .. to look for getList operations
        if (operation === "getList") {
          // .. and handle the data and meta data
          extractedData = data.data;
          // extractedData.meta = data.data.meta;
        } else {
          extractedData = data.data;
        }
        return extractedData;
      });
    }
})();