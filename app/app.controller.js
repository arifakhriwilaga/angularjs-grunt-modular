/**
 * App Controller
 * @namespace Controller
*/

(function() {
  'use strict';

  angular
    .module('angularjsGruntApp')
    .controller('AppController', appController);

    /* @ngInject */
    appController.$inject = ['$rootScope', '$scope', '$state', 'BodyFactory'];

    /**
     * @namespace appController
     * @desc define the base controller for handle global config like auto redirect   
   */
    function appController ($rootScope, $scope, $state, BodyFactory) {
      $rootScope.body = BodyFactory;
      
      $rootScope.$on('$stateChangeStart', function(event, toState){
        // if(nestudioConfig.mapFeatures(localStorageService.get('features')) && !nestudioConfig.mapFeatures(localStorageService.get('features'), toState.feature) && toState.isAuth){
    
        //   // TO DO: REDIRECT NOT HAVE FEATURE
        //   // console.info('Noting Page');
        //   // console.log('Unauthorized Access');
        //   // event.preventDefault();
        //   // $state.go('auth.root', {}, {reload: true});
        //   // toastr.error("You don't have access to view this feature", "Error");
        // }else if(!toState.isAuth && toState.name !== 'auth.root' && $auth.isAuthenticated()){
        //   console.log('Nothing Page');
        //   event.preventDefault();
        //   $state.go('auth.root', {}, {reload: true});
        // }else if(toState.isAuth && toState.name !== 'guest.index' && !$auth.isAuthenticated()){
        //   console.log('Unauthorized Access');
        //   event.preventDefault();
        //   $state.go('guest.index', {}, {reload: true});
        // }
      });
    }
})();
