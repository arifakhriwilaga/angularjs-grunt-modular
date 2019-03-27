/**
 * RouterHelperProvider Provider
 * @namespace Providers
*/

(function() {
    'use strict';

    angular
        .module('angularjsGruntApp.configs.router')
        .provider('routerHelper', routerHelperProvider);

    /* @ngInject */
    routerHelperProvider.$inject = ['$locationProvider', '$stateProvider', '$urlRouterProvider'];

    /**
     * @namespace routerHelperProvider
     * @desc provider for interceptor routes, config url  
   */
    function routerHelperProvider($locationProvider, $stateProvider, $urlRouterProvider) {
        //jshint validthis:true 
        this.$get = routerHelper;
        
        // enable html5Mode for pushstate ('#'-less URLs)
        $locationProvider.html5Mode(true);
        $locationProvider.hashPrefix('!');
        
        /* @ngInject */
        routerHelper.$inject = ['$state'];

        /**
         * @namespace routerHelper
         * @desc description here...
         * @memberOf RouterHelperProvider
       */
        function routerHelper($state) {
            var hasOtherwise = false;

            var service = {
                configureStates: configureStates,
                // getStates: getStates
            };

            return service;

            ///////////////

            /**
             * @name configureStates
             * @desc description here...
             * @param {any} states list routes created in the routes file
             * @param {any} otherwisePath ...
             * @returns {String}
             * @memberOf RouterHelperProvider.RouterHelper
            */
            function configureStates(states, otherwisePath) {
                states.forEach(function(state) {
                    $stateProvider.state(state.state, state.config);
                });
                if (otherwisePath && !hasOtherwise) {
                    hasOtherwise = true;
                    $urlRouterProvider.otherwise(otherwisePath);
                }
            }

            // /**
            //  * @name getStates
            //  * @desc description here...
            //  * @returns {any}
            //  * @memberOf RouterHelperProvider.RouterHelper
            // */
            // function getStates() { return $state.get(); }
        }
    }
})();