/**
 * BodyFactory Factory
 * @namespace Factory
*/

(function() {
    'use strict';

    
    angular
        .module('angularjsGruntApp.core.layouts.body')
        .factory('BodyFactory', bodyFactory);

        /**
            * @namespace bodyFactory
            * @desc for change class inside body tag (<body />). example: if dashboard and guest home has different class
            * @returns {get class function()}
            * @returns {set class function()}
       */
        function bodyFactory () {
            var bodyClass = 'sidebar-mini skin-blue-light fixed';
            return {
                class: function() { return bodyClass; },
                setClass: function(newClass) { bodyClass = newClass; }
            };
        }
})();