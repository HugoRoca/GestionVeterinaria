// Hugo Roca - 2018
(function () {
    'use strict';

    angular
        .module('APPVeterinaria')
        .controller('loginController', loginController);

    loginController.$inject = ['configService', 'authenticationService', 'localStorgeService', 'dataService', 'toastr', '$state'];

    function loginController(configService, authenticationService, localStorgeService, dataService, toastr, $state) {
        var vm = this;
        vm.usuario = {
            usuario: '',
            contrasenia: ''
        }

        vm.login = login;

        activate();

        ////////////////

        function activate() {
            if (configService.getLogin()) return location.href = 'index.html#!/portal';
        }

        function login(val) {
            if (val) {
                authenticationService.login(vm.usuario);
            }else{
                toastr.warning('Debe de completaer los datos!', 'Login');
            }
        }
    }
})();