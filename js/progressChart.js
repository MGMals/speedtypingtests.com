window.progressChart = {

    chart: null,

    create: function (canvasId, labels, values) {

        const canvas = document.getElementById(canvasId);

        if (!canvas)
            return;

        if (this.chart)
            this.chart.destroy();

        this.chart = new Chart(canvas, {

            type: 'bar',

            data: {

                labels: labels,

                datasets: [{

                    label: 'Words Per Minute',

                    data: values,

                    backgroundColor: '#2ab6f7',

                    borderColor: '#1d8fd1',

                    borderWidth: 1,

                    borderRadius: 8,

                    maxBarThickness: 40

                }]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {
                        display: false
                    },

                    tooltip: {

                        callbacks: {

                            label: function (context) {
                                return context.raw + " WPM";
                            }

                        }

                    }

                },

                scales: {

                    x: {

                        grid: {
                            display: false
                        }

                    },

                    y: {

                        beginAtZero: true,

                        ticks: {

                            stepSize: 10

                        },

                        title: {

                            display: true,

                            text: 'Words Per Minute'

                        }

                    }

                }

            }

        });

    }

}