'use strict';

/**
 * @ngdoc service
 * @name <%= scriptAppName %>.<%= scriptName %>
 * @description
 * # <%= scriptName %>
 * Factory in the <%= appName %>.
 */
angular.module('<%= scriptAppName %>')
    .factory('<%= scriptName %>', function () {

        //private method
        function someFunction() {
            return 'FACTORY STUFFS';
        }

        // Public return value
        return {
            someMethod: function () {
                return someFunction;
            }
        };
    });
