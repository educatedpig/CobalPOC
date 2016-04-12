(function () {

    'use strict';

    var QuestionnaireModule = angular.module('app.questionnaire');

    QuestionnaireModule.controller('QuestionnaireCtrl', QuestionnaireCtrl);

    function QuestionnaireCtrl () {

      // Bindings
      var QuestionnaireCtrl = this;
      QuestionnaireCtrl.currentActive = '';
      // define variables
      // QuestionnaireCtrl.var = 'foo';

      console.log('Questionnaire Controller Works!');

      QuestionnaireCtrl.isActive = function(navItem) {
        return QuestionnaireCtrl.currentActive === navItem;
      }

      QuestionnaireCtrl.setActive = function(navItem) {
        QuestionnaireCtrl.currentActive = navItem;
      }

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
      }
    }

})();
