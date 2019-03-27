/**
 * Guest Routes
 * @namespace Routes
*/

(function() {
    'use strict';

    angular
        .module('angularjsGruntApp')
        .run(appRun);

    /* @ngInject */
    function appRun(routerHelper) {
        routerHelper.configureStates(getStates());
    }

    /**
        * @name getStates
        * @desc define routes guest
        * @returns {array of object [{}]}
    */
    function getStates() {
        return [
            {
                state: 'guest', 
                config: {
                    name: 'guest',
                    abstract: true,
                    template: '<ui-view/>'
                }
            }
        ];
    }
})();


// for other routes (need delete after implement!)
// {
//     state: 'guest.register',
//     config: {
//         url: '/register',
//         page: {
//             title: 'angularjs-grunt'
//         },
//         controller: 'GuestRegisterController',
//         templateUrl: '/register/register.html',
//         // init: 'index()',
//         isAuth: false
//     }
// },
// {
//     state: 'guest.forgotPassword',
//     config: {
//         url: '/forgot-password',
//         page: {
//             title: 'angularjs-grunt'
//         },
//         controller: 'GuestForgotPasswordController',
//         templateUrl: '/forgot-password/forgot-password.html',
//         // init: 'index()',
//         isAuth: false
//     }
// }