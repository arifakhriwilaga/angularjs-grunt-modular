/**
 * guestLoginController Controller
 * @namespace Controller
*/

(function() {
  'use strict';

  angular
    .module('angularjsGruntApp.guest.login')
    .controller('GuestLoginController', guestLoginController); 
    
    function guestLoginController (BodyFactory) {
      /*jshint validthis: true */
      var vm = this;
      const bodyClass = 'hold-transition login-page';

      vm._bodyFactory = BodyFactory;
      vm.$onInit = function() {
        vm._bodyFactory.setClass(bodyClass);
      };
    }
})();