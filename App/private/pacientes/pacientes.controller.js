(function () {
    'use strict';

    angular
        .module('APPVeterinaria')
        .controller('pacientesController', pacientesController);

    pacientesController.$inject = ['configService', 'authenticationService', 'dataService', 'toastr', '$state'];

    function pacientesController(configService, authenticationService, dataService, toastr, $state) {
        var vm = this;
        vm.Titulo = '';

        vm.mostrarModalCRUD = mostrarModalCRUD;
        vm.NuevoRegistro = NuevoRegistro;

        activate();

        ////////////////

        function activate() {
            vm.Titulo = 'Lista de Pacientes';
        }

        function mostrarModalCRUD() {
            MostrarModal('RegistraEditaModal');
        }

        function NuevoRegistro() {
            $state.go('pacienteRegistra');
        }
    }
})();