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
var coklatCms = angular.module('angularjsGruntApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.router'
  ]);

  // // This is a server file
  // coklatCms.get("*", function(req, res) {
  //   res.render("./index.html");
  // });

  
  
  // config route here
  coklatCms.config(function ($routeProvider,$urlRouterProvider, $stateProvider, $locationProvider) {
    
    $urlRouterProvider.otherwise('/');

    var helloState = {
      name: 'about',
      // abstract: true,
      url: '/about',
      templateUrl: 'views/templates/auth/students/form.html',
      controller: 'StudentController',

    }
  
    var aboutState = {
      name: 'home',
      // abstract: true,
      url: '/home',
      template: '<h3>Its the UI-Router hello world app!</h3>'
    }
  $stateProvider.state(helloState);
  $stateProvider.state(aboutState);

  // $routeProvider
  //   .when('/', {
  //     templateUrl: 'views/main.html',
  //     controller: 'MainCtrl',
  //     controllerAs: 'main'
  //   })
  //   .otherwise({
  //     redirectTo: '/'
  //   });
  // enable html5Mode for pushstate ('#'-less URLs)
  // $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);
});
