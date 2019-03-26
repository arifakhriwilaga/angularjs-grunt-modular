'use strict';

/**
 * @ngdoc function
 * @name angularjsGruntApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsGruntApp
 */
var angularjsGruntModule = angular.module('angularjsGruntApp');

angularjsGruntModule.factory('BodyService', function () {
    var bodyClass = 'sidebar-mini skin-blue-light fixed';
    return {
        class: function() { return bodyClass; },
        setClass: function(newClass) { bodyClass = newClass; }
    };
});
