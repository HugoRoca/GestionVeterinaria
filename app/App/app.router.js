// Hugo Roca - 2018
(function () {
    'use strict';

    angular
        .module('APPVeterinaria')
        .config(routeConfig);

    routeConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

    function routeConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('dashboard', {
                url: '/dashboard',
                templateUrl: 'App/private/dashboard/dashboard.html'
            })
            .state('pacientes', {
                url: '/pacientes',
                templateUrl: 'App/private/pacientes/pacientes.html'
            })
            .state('pacienteRegistra', {
                url: '/pacienteRegistra',
                templateUrl: 'App/private/pacientes/pacientesRegistrar.html'
            })
            .state('historia', {
                url: '/historia',
                templateUrl: 'App/private/historia/historia.html'
            })
            .state('historiaRegistrar', {
                url: '/historiaRegistrar',
                templateUrl: 'App/private/historia/historiaRegistrar.html'
            })
            .state('otherwise',{
                url: '*path',
                templateUrl: 'App/private/dashboard/dashboard.html'
            })
    }
})();