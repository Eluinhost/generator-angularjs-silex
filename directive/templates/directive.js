'use strict';

/**
 * @ngdoc directive
 * @name <%= scriptAppName %>.directive.<%= scriptName %>
 * @description
 * # <%= scriptName %>
 * Directive in the <%= appName %>.
 */
angular.module('<%= scriptAppName %>')
    .directive('<%= scriptName %>', function () {
        return {
            template: '<span></span>',
            restrict: 'E',
            link: function postLink(scope, element, attrs) {
                element.text('<%= scriptName %> Directive');
            }
        };
    });
