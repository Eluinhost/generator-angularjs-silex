'use strict';

/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= scriptName %>
 * @description
 * # <%= scriptName %>
 * Provider in the <%= appName %>.
 */
angular.module('<%= scriptAppName %>')
    .provider('<%= scriptName %>', function () {

        //private variable
        var value = 'PROVIDER';

        // Public API for configuration
        this.setSalutation = function (s) {
            value = s;
        };

        // Method for instantiating
        this.$get = function () {
            return function() {
                this.getValue = function() {}
                return value;
            };
        };
    });
