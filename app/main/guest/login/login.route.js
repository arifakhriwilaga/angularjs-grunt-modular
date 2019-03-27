/**
 * Login Routes
 * @namespace Routes
*/

(function() {
    'use strict';

    angular
        .module('angularjsGruntApp.guest.login')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    /**
        * @name getStates
        * @desc define routes login
        * @returns {array of object [{}]}
    */
    function getStates() {
        return [
            {
                state: 'guest.login',
                config: {
                    url: '/login',
                    page: {
                        title: 'angularjs-grunt'
                    },
                    controller: 'GuestLoginController',
                    templateUrl: 'main/guest/login/login.html',
                    // init: 'index()',
                    isAuth: false
                }
            },
        ];
    }
})();