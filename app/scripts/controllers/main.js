'use strict';

/**
 * @ngdoc function
 * @name angularjsGruntApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsGruntApp
 */
angular.module('angularjsGruntApp')
  .controller('MainController', function ($scope,$rootScope, $location) {
    // example route
    $rootScope.$on('$stateChangeStart', function(event, toState){
      console.log('1', event);
      console.log('2', toState);
      
    });
    $scope.$watch('$location.search()', function(locationPath) {
      console.log('1', locationPath);
      console.log('2', $location.path());
      // (elementPath === locationPath) ? $element.addClass("current") : $element.removeClass("current");
    });
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
