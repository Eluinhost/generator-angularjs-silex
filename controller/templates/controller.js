'use strict';

/**
 * @ngdoc function
 * @name <%= scriptAppName %>.controller:<%= controllerName %>
 * @description
 * # <%= controllerName %>
 * Controller in <%= appName %>
 */
angular.module('<%= scriptAppName %>')
    .controller('<%= controllerName %>', function ($scope, $http) {

        $scope.scriptName = '<%= scriptName + ".js" %>';
        $scope.appName = '<%= appName %>';

        $scope.me = {
            'name': 'Loading...',
            'age': 'Loading...'
        };

        $http.get('/api/me').success(function (val) {
            $scope.me = val;
        });
    });
