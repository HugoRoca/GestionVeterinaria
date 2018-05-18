(function() {
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
        vm.volverLista = volverLista;

        activate();

        ////////////////

        function activate() { vm.Titulo = 'Lista de Pacientes'; toastr.success('Probando','Mensaje'); }

        function mostrarModalCRUD() {
            MostrarModal('RegistraEditaModal');
        }
        
        function NuevoRegistro() {
            $('#Pacientes a[data-target="#RegistroPacientes"]').tab('show');
            vm.Titulo = 'Registro de Pacientes';            
        }

        function volverLista(){
            $('#Pacientes a[data-target="#ListaPacientes"]').tab('show');
            vm.Titulo = 'Lista de Pacientes'; 
        }
    }
})();