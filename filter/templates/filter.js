'use strict';

/**
 * @ngdoc filter
 * @name <%= scriptAppName %>.filter:<%= scriptName %>
 * @description
 * # <%= scriptName %>
 * Filter in the <%= appName %>.
 */
angular.module('<%= scriptAppName %>')
    .filter('<%= scriptName %>', function () {
        return function (input) {
            return '<%= scriptName %> filtered version: ' + input;
        };
    });
