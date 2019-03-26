'use strict';

/**
 * @ngdoc overview
 * @name angularjsGruntApp
 * @description
 * # angularjsGruntApp
 *
 * Main module of the application.
 */

// module of application
var angularjsGruntModule = angular.module('angularjsGruntApp', [
  // register packages
  'ngAnimate',
  'ngCookies',
  'ngResource',
  'ngRoute',
  'ngSanitize',
  'ngTouch',
  'ui.router'
]);