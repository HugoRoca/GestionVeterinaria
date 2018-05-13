// Hugo Roca - 2018
(function () {
    'use strict';

    angular
        .module('APPVeterinaria')
        .controller('loginController', loginController);

    loginController.$inject = ['configService', 'authenticationService', 'dataService', 'toastr', '$state'];

    function loginController(configService, authenticationService, dataService, toastr, $state) {
        var vm = this;
        vm.usuario = {
            usuario: '',
            contrasenia: ''
        }
        vm.error = false;

        vm.login = login;

        activate();

        ////////////////

        function activate() {
            if (configService.getLogin()) return location.href = '../index.html#!/dashboard';
            vm.error = false;
        }

        function login(val) {
            if (val) {
                authenticationService.login(vm.usuario);
            }else{
                vm.error = true;
            }
        }
    }
})();