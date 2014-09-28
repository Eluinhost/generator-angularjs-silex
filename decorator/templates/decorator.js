'use strict';

/**
 * @ngdoc decorator
 * @name <%= scriptAppName %>.decorator.<%= scriptName %>
 * @description
 * # <%= scriptName %>
 * Directive in the <%= appName %>.
 */
angular.module('<%= scriptAppName %>')
    .config(function ($provide) {
        $provide.decorator('<%= scriptName %>', function ($delegate) {
            return $delegate;
        });
    });
