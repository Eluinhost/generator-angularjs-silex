'use strict';

/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= scriptName %>
 * @description
 * # <%= scriptName %>
 * Service in the <%= appName %>.
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
