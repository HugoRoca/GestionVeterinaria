// Hugo Roca - 2018
(function() {
    'use strict';

    angular
        .module('APPVeterinaria')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$http', '$state', 'localStorageService', 'configService', 'toastr', 'dataservice'];
    function authenticationService($http, $state, localStorageService, configService, toastr, dataservice) {
        var service = {
            exposedFn:exposedFn
        };
        
        return service;

        ////////////////
        function exposedFn() { }
    }
})();