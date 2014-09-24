'use strict';

angular.module('<%= _.camelize(appname) %>', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'components/home/home.html',
                controller: 'HomeCtrl'
            });
    });
