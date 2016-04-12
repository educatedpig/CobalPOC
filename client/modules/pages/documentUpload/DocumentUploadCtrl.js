(function () {

    'use strict';

    var documentUploadModule = angular.module('app.documentUpload');

    documentUploadModule.controller('DocumentUploadCtrl', DocumentUploadCtrl);

    function DocumentUploadCtrl ($scope) {

      // Bindings
      var DocumentUploadCtrl = this;
      DocumentUploadCtrl.currentActive = '';

      console.log('DocumentUpload Controller Works!');

      DocumentUploadCtrl.isActive = function(navItem) {
        return DocumentUploadCtrl.currentActive === navItem;
      }

      DocumentUploadCtrl.setActive = function(navItem) {
        DocumentUploadCtrl.currentActive = navItem;
      }

      // $scope.myDate = new Date();

      // $scope.minDate = new Date(
      //     $scope.myDate.getFullYear(),
      //     $scope.myDate.getMonth() - 2,
      //     $scope.myDate.getDate());

      // $scope.maxDate = new Date(
      //     $scope.myDate.getFullYear(),
      //     $scope.myDate.getMonth() + 2,
      //     $scope.myDate.getDate());
      
      // $scope.onlyWeekendsPredicate = function(date) {
      //   var day = date.getDay();
      //   return day === 0 || day === 6;
      // }

      init();

      function init() {
        $('#gn-menu').show();
        $('#gn-logout').show();
        /* activate sidebar */
        $('#sidebar').affix({
          offset: {
            top: 235
          }
        });

        /* activate scrollspy menu */
        var $body   = $(document.body);
        var navHeight = $('.navbar').outerHeight(true) + 10;

        $body.scrollspy({
          target: '#leftCol',
          offset: navHeight
        });

        /* smooth scrolling sections */
        $('a[href*=#]:not([href=#])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
              var target = $(this.hash);
              target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
              if (target.length) {
                $('html,body').animate({
                  scrollTop: target.offset().top - 50
                }, 1000);
                return false;
              }
            }
        });

        $scope.userState = '';
        $scope.states = ('AL AK AZ AR CA CO CT DE FL GA HI ID IL IN IA KS KY LA ME MD MA MI MN MS ' +
            'MO MT NE NV NH NJ NM NY NC ND OH OK OR PA RI SC SD TN TX UT VT VA WA WV WI ' +
            'WY').split(' ').map(function (state) { return { abbrev: state }; });
      }
    }

})();
