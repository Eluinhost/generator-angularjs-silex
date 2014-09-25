'use strict';

angular.module('<%= appname + "App" %>', ['ui.router'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'components/home/home.html',
                controller: 'HomeCtrl'
            });
    });
