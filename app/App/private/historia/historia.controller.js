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

        vm.historiaBusqueda = {
            Desde: '',
            Hasta:''
        }

        vm.volverLista = volverLista;
        vm.nuevaHistoria = nuevaHistoria;
        activate();

        ////////////////

        function activate() { 
            vm.historiaBusqueda.Desde = fechaHoyFormato;
            vm.historiaBusqueda.Hasta = fechaHoyFormato;
        }

        function volverLista(){
            $state.go('historia');
        }

        function nuevaHistoria() {
            $state.go('historiaRegistrar');
        }
    }
})();