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
var angularjsGruntModule = angular.module('angularjsGruntApp');

// config route here
angularjsGruntModule.config(function ($routeProvider,$urlRouterProvider, $stateProvider, $locationProvider) {
  
  $urlRouterProvider.otherwise('/');

  $stateProvider

  // auth guest
  .state('guest', {
    name: 'guest',
    abstract: true,
    template: '<ui-view/>'
  }).state('guest.index', {
    url: '/login',
    page: {
      title: 'angularjs-grunt'
    },
    controller: 'GuestController',
    templateUrl: '/views/templates/guest/login.html',
    // init: 'index()',
    isAuth: false
  })

  // auth state
  .state('auth', {
    name: 'home',
    // abstract: true,
    url: '/home',
    template: '<h3>Its the UI-Router hello world app!</h3>'
  });

  // enable html5Mode for pushstate ('#'-less URLs)
  $locationProvider.hashPrefix('!');
  $locationProvider.html5Mode(true);
});
