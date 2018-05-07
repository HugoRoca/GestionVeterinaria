// Hugo Roca - 2018
(function () {
    'use strict';

    angular
        .module('APPVeterinaria')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('portal', {
                url: '/portal',
                templateUrl: 'App/private/dashboard/dashboard.html'
            })
            .state('otherwise',{
                url: '*path',
                templateUrl: 'App/private/dashboard/dashboard.html'
            })
    }
})();