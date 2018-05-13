// Hugo Roca - 2018
(function () {
    'use strict';

    angular
        .module('APPVeterinaria')
        .factory('authenticationService', authenticationService);

    authenticationService.$inject = ['$http', '$state', 'localStorageService', 'configService', 'toastr', 'dataService'];

    function authenticationService($http, $state, localStorageService, configService, toastr, dataService) {
        var service = {
            login: login,
            logout: logout,
            errorValida: errorValida
        };

        return service;

        ////////////////
        function login(user) {
            /*dataService.postData('', 'data').then(function (data) {
                mostrarConsola(data);
                if (data.data.lenght > 0) {*/
                    localStorageService.set('Veterinaria', {
                        token: 'aqui va el token..',
                        userName: 'login'/*data.data[0].usuario,
                        id: data.data[0].id*/
                    });

                    configService.setLogin(true);
                    location.href = '../index.html#!/dashboard';
                /*} else {
                    toastr.warning('Usuario y/o contraseña incorrecto.', 'LOGIN');
                }
            }, function (error) {
                errorValida(error)
            });*/
        }

        function logout() {
            localStorageService.remove('Veterinaria');
            configService.setLogin(false);
            location.href = 'Views/login.html';
        }

        function errorValida(error) {
            mostrarConsola(error);
            if (error.statusText == 'Unauthorized') {
                toastr.warning('Tu sesion a caducado, por favor vuelve a iniciar!', 'Alerta');
                logout();
            } else if (error.statusText == 'Bad Request') {
                if (error.data.error == 'invalid_grant') {
                    mostrarConsola('Usuario y/o contraseña invalidos!!');
                }
                toastr.error('Sucedió un error inesperado, por favor inténtalo en unos minutos y si el error persiste comuníquese con el ADM.', 'Error');
            } else if(error.statusText == 'Internal Server Error'){
                toastr.error('Tu conexión a internet es muy lenta, por favot verifica tu señal de internet.', 'Veterinaria');
                logout();
            }
        }

    }
})();