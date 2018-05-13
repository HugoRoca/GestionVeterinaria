// Hugo Roca - 2018
(function() {
    'use strict';

    angular.module('APPVeterinaria').config(config).run(run);

    config.$inject = ['$compileProvider'];

    function config($compileProvider) {
        $compileProvider.debugInfoEnabled(true);
    }

    run.$inject = ['$http','$state','localStorageService','configService','$rootScope'];

    function run($http, $state, localStorageService, configService, $rootScope){
        var user = localStorageService.get('Veterinaria');
        
        if (user && user.token != '') {
            configService.setLogin(true);
            $state.go('dashboard');
        }else{
            configService.setLogin(false);
        }
    }
})();