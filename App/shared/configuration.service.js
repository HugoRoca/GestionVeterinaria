// Hugo Roca - 2018
(function() {
    'use strict';

    angular
        .module('APPVeterinaria')
        .factory('configService', configService);

    function configService() {
        var service = {};
        var apiUrl = undefined;
        var isLogged = false;
        
        service.setLogin = setLogin;
        service.getLogin = getLogin;

        return service;

        ////////////////
        function setLogin(status){
            isLogged = status;
        }

        function getLogin(){
            return isLogged;
        }
    }
})();