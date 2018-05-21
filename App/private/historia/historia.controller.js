(function() {
    'use strict';

    angular
        .module('APPVeterinaria')
        .controller('historiaController', historiaController);

    historiaController.$inject = ['configService', 'authenticationService', 'dataService', 'toastr', '$state'];
    function historiaController(configService, authenticationService, dataService, toastr, $state) {
        var vm = this;
        vm.Titulo = '';

        activate();

        ////////////////

        function activate() { vm.Titulo = 'Busqueda de historial'; }
    }
})();