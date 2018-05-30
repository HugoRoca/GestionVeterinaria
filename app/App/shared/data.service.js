// Hugo Roca - 2018
(function() {
    'use strict';

    angular
        .module('APPVeterinaria')
        .factory('dataService', dataService);

    dataService.$inject = ['$http', '$state', 'localStorageService', 'configService'];
    function dataService($http, $state, localStorageService, configService) {
        var service = {};
        service.getData = getData;
        service.postData = postData;
        service.putData = putData;
        service.deleteData = deleteData;
        
        return service;

        ////////////////
        
        function salir(){
            // función para evitar las llamadas, posiblemente necesario mas adelante
        }

        function getData(url){
            return $http.get(url);
        }

        function postData(url, data){
            return $http.post(url, data);
        }

        function putData(url, data){
            return $http.put(url, data);
        }

        function deleteData(url){
            return $http.delete(url);
        }
    }
})();