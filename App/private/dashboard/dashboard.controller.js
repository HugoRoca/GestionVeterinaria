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
            reporteGrafico();
        }

        function reporteGrafico() {
            var mainChart = new Chart($("#main-chart"), {
                type: "line",
                data: {
                    labels: ["M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S", "M", "T", "W", "T", "F", "S", "S"],
                    datasets: [{
                            label: "My First dataset",
                            backgroundColor: hexToRgba(getStyle("--info"), 10),
                            borderColor: getStyle("--info"),
                            pointHoverBackgroundColor: "#ff1a1a",
                            borderWidth: 2,
                            data: [165, 180, 70, 69, 77, 57, 125, 165, 172, 91, 173, 138, 155, 89, 50, 161, 65, 163, 160, 103, 114, 185, 125, 196, 183, 64, 137, 95, 112, 175]
                        },
                        {
                            label: "My Second dataset",
                            backgroundColor: "transparent",
                            borderColor: getStyle("--success"),
                            pointHoverBackgroundColor: "#fff",
                            borderWidth: 2,
                            data: [92, 97, 80, 100, 86, 97, 83, 98, 87, 98, 93, 83, 87, 98, 96, 84, 91, 97, 88, 86, 94, 86, 95, 91, 98, 91, 92, 80, 83, 82]
                        },
                        {
                            label: "My Third dataset",
                            backgroundColor: "transparent",
                            borderColor: getStyle("--danger"),
                            pointHoverBackgroundColor: "#fff",
                            borderWidth: 1,
                            borderDash: [8, 5],
                            data: [65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 65, 80, 65, 65, 65, 65, 65, 65, 65, 65, 65]
                        }
                    ]
                },
                options: {
                    maintainAspectRatio: false,
                    legend: {
                        display: false
                    },
                    scales: {
                        xAxes: [{
                            gridLines: {
                                drawOnChartArea: false
                            }
                        }],
                        yAxes: [{
                            ticks: {
                                beginAtZero: true,
                                maxTicksLimit: 5,
                                stepSize: Math.ceil(50),
                                max: 250
                            }
                        }]
                    },
                    elements: {
                        point: {
                            radius: 0,
                            hitRadius: 10,
                            hoverRadius: 4,
                            hoverBorderWidth: 3
                        }
                    }
                }
            });
        }

    }
})();