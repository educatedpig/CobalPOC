(function () {
    'use strict';
    angular.module('app', [
         'ngRoute'
        ,'ngAnimate'
        ,'ngAria'

        // 
        //,'ui.bootstrap'
        // ,'easypiechart'
        // ,'textAngular'
        // ,'angular-loading-bar'

        // // 
        // ,'app.ui'
        // ,'app.ui.form'
        // ,'app.table'
        // ,'app.chart

        //plugins
        ,'ui.bootstrap'
        ,'smoothScroll'
        ,'LocalStorageModule'

        // pages
        ,'restangular'
        ,'app.login'
        ,'app.questionnaire'
        ,'app.toDo'
        ,'app.documentUpload'
    ])
})(); 

