(function(){
    'use strict';

    angular
        .module('APPVeterinaria')
        .controller('headerController', headerController)

    headerController.$inject = ['configService', 'authenticationService', 'dataService', 'toastr', '$state'];

    function headerController(configService, authenticationService, dataService, toastr, $state) {
        var vm = this;

        vm.logout = logout;

        activate();

        function activate() { mostrarConsola('header');}

        function logout() {
            authenticationService.logout();
        }
    }
})();