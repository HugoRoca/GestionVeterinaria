// Hugo Roca - 2018
(function () {
    'use strict';

    angular
        .module('APPVeterinaria')
        .controller('dashboardController', dashboardController);

    dashboardController.$inject = ['configService', 'authenticationService', 'dataService', 'toastr', '$state'];

    function dashboardController(configService, authenticationService, dataService, toastr, $state) {
        var vm = this;

        activate();

        ////////////////

        function activate() {
            reporteGrafico1();
        }

        function reporteGrafico1() {
            var cardChart1 = new Chart($('#card-chart1'), {
                type: 'line',
                data: {
                    labels: ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado', 'Domingo'],
                    datasets: [{
                        label: 'Días de la semana',
                        backgroundColor: getStyle('--primary'),
                        borderColor: 'rgba(255,255,255,.90)',
                        data: [80, 59, 84, 84, 51, 55, 35]
                    }]
                },
                options: {
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                color: 'transparent',
                                zeroLineColor: 'transparent'
                            },
                            ticks: {
                                fontSize: 2,
                                fontColor: 'transparent'
                            }
                        }],
                        yAxes: [{
                            display: false,
                            ticks: {
                                display: false,
                                min: 35,
                                max: 89
                            }
                        }]
                    },
                    elements: {
                        line: {
                            borderWidth: 1
                        },
                        point: {
                            radius: 4,
                            hitRadius: 10,
                            hoverRadius: 4
                        }
                    }
                }
            });
        }
    }
})();