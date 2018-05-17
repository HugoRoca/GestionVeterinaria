(function() {
    'use strict';

    angular
        .module('APPVeterinaria')
        .controller('pacientesController', pacientesController);

    pacientesController.$inject = ['configService', 'authenticationService', 'dataService', 'toastr', '$state'];
    function pacientesController(configService, authenticationService, dataService, toastr, $state) {
        var vm = this;
        

        vm.mostrarModalCRUD = mostrarModalCRUD;

        activate();

        ////////////////

        function activate() { toastr.success('Probando','Mensaje'); }

        function mostrarModalCRUD() {
            MostrarModal('RegistraEditaModal');
        }
    }
})();