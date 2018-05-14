// Hugo Roca - 2018
(function() {
    'use strict';

    angular
        .module('APPVeterinaria')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['dependency1'];
    function dashboardController(dependency1) {
        var vm = this;
        

        activate();

        ////////////////

        function activate() { }
    }
})();