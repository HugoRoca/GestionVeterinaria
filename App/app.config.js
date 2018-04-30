// Hugo Roca - 2018
(function() {
    'use strict';

    angular.module('APPVeterinaria').config(config).run(run);

    config.$inject = ['$compileProvider'];

    function config($compileProvider) {
        $compileProvider.debugInfoEnabled(true);
    }

    run.$inject = ['$http','$state','LocalStorageService','configService','$rootScope'];

    function run($http, $state, LocalStorageService, configService, $rootScope){
        var user = LocalStorageService.get('Veterinaria');

        if (user && user.token != '') {
            configService.setLogin(true);
            $state.go('portal');
        }else{
            configService.setLogin(false);
        }
    }
})();