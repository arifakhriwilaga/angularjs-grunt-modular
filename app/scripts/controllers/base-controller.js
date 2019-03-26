'use strict';

/**
 * @ngdoc function
 * @name angularjsGruntApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularjsGruntApp
 */
var angularjsGruntModule = angular.module('angularjsGruntApp');
angularjsGruntModule.controller('BaseController', function ($rootScope, $scope, $state, BodyService) {
    $rootScope.body = BodyService;
    console.log('hi');
    
    $rootScope.$on('$stateChangeStart', function(event, toState){
      console.log('hi');
      if(nestudioConfig.mapFeatures(localStorageService.get('features')) && !nestudioConfig.mapFeatures(localStorageService.get('features'), toState.feature) && toState.isAuth){
  
        // TO DO: REDIRECT NOT HAVE FEATURE
        // console.info('Noting Page');
        // console.log('Unauthorized Access');
        // event.preventDefault();
        // $state.go('auth.root', {}, {reload: true});
        // toastr.error("You don't have access to view this feature", "Error");
      }else if(!toState.isAuth && toState.name !== 'auth.root' && $auth.isAuthenticated()){
        console.log('Nothing Page');
        event.preventDefault();
        $state.go('auth.root', {}, {reload: true});
      }else if(toState.isAuth && toState.name !== 'guest.index' && !$auth.isAuthenticated()){
        console.log('Unauthorized Access');
        event.preventDefault();
        $state.go('guest.index', {}, {reload: true});
      }
    });
  });
