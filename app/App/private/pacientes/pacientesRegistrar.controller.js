(function () {
    'use strict';

    angular
        .module('APPVeterinaria')
        .controller('pacienteRegistrarController', pacienteRegistrarController);

    pacienteRegistrarController.$inject = ['configService', 'authenticationService', 'dataService', 'toastr', '$state'];

    function pacienteRegistrarController(configService, authenticationService, dataService, toastr, $state) {
        var vm = this;

        vm.volverLista = volverLista;

        activate();

        ////////////////

        function activate() {}

        function volverLista() {
            $state.go('pacientes');
        }
    }
})();