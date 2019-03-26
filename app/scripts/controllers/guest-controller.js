'use strict';

/**
 * @ngdoc function
 * @name angularjsGruntApp.controller:StudentController
 * @description
 * # StudentCtrl
 * Controller of the angularjsGruntApp
 */

var angularjsGruntModule = angular.module('angularjsGruntApp');
angularjsGruntModule.controller('GuestController', function ($scope, BodyService) {
  const bodyClass = "hold-transition login-page";

  $scope._bodyService = BodyService;
  this.$onInit = function() {
    $scope._bodyService.setClass(bodyClass);
  }

  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
