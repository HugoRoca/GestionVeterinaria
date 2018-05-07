// Hugo Roca - 2018
(function() {
    'use strict';

    angular
        .module('APPVeterinaria')
        .controller('appController', appController);

    appController.$inject = ['configService', 'authenticationService', 'localStorageService', '$state'];
    function appController(configService, authenticationService, localStorageService, $state) {
        var vm = this;
        vm.logueado = true;
        vm.logout = logout;

        activate();

        ////////////////

        function activate() { 
            if (!configService.getLogin()) return location.href = 'Views/login.html';
            $state.go('portal');
        }

        function logout() {
            authenticationService.logout();
        }
    }
})();