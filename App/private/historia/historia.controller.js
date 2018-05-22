(function() {
    'use strict';

    angular
        .module('APPVeterinaria')
        .controller('historiaController', historiaController);

    historiaController.$inject = ['configService', 'authenticationService', 'dataService', 'toastr', '$state'];
    function historiaController(configService, authenticationService, dataService, toastr, $state) {
        var vm = this;
        var fechaHoy = new Date();
        var fechaHoyFormato = getDateFormat(fechaHoy);

        vm.Titulo = '';
        vm.historiaBusqueda = {
            Desde: '',
            Hasta:''
        }

        activate();

        ////////////////

        function activate() { 
            vm.Titulo = 'Busqueda de historial'; 
            vm.historiaBusqueda.Desde = fechaHoyFormato;
            vm.historiaBusqueda.Hasta = fechaHoyFormato;
        }
    }
})();