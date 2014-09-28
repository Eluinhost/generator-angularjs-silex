'use strict';

/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= scriptName %>
 * @description
 * # <%= scriptName %>
 * Service in the <%= appName %>.
 */
angular.module('<%= scriptAppName %>')
    .service('<%= scriptName %>', function <%= scriptName %>() {
        this.someValue = 'SERVICE VALUE';
    });
