/**
 * App Module
 * @namespace Module
*/

(function() {
  'use strict';
  
  angular.module('angularjsGruntApp', [
    // register packages
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router',

    // configs
    'angularjsGruntApp.configs',

    // core
    'angularjsGruntApp.core',

    // main
    'angularjsGruntApp.guest',
  ]);
})();
