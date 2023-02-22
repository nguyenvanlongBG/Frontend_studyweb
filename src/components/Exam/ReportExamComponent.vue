<template>
    <div class="container-report-exam" v-if="render">
        <slot name="list-tabs"></slot>
        <div id="chart-amount">
            <apexchart type="bar" height="350" :options="amount.chartOptions" :series="amount.series"></apexchart>
        </div>
        <div id="chart-percent">
            <apexchart type="bar" height="350" :options="percent.chartOptions" :series="percent.series"></apexchart>
        </div>
        <div id="chart-pie">
            <apexchart type="pie" width="380" :options="pie.chartOptions" :series="pie.series"></apexchart>
        </div>
    </div>
</template>
<script>
import { useRoute } from 'vue-router'
import VueApexCharts from 'vue3-apexcharts'
import { getReportExam } from '../../services/exam'
export default {
    name: "ReportExamComponent",
    components: {
        apexchart: VueApexCharts,
    },
    setup() {
        const idTest = parseInt(useRoute().params.idTest)
        const idExam = parseInt(useRoute().params.idExam)
        return {
            idTest, idExam
        }
    },
    mounted() {
        this.handleGetData()
    },
    data() {
        return {
            render: true,
            amount: {
                series: [{
                    name: 'PRODUCT A',
                    data: [44, 55, 41]
                }, {
                    name: 'PRODUCT B',
                    data: [13, 23, 20]
                }, {
                    name: 'PRODUCT C',
                    data: [11, 17, 15]
                }, {
                    name: 'PRODUCT D',
                    data: [21, 7, 25]
                }],
                chartOptions: {
                    chart: {
                        type: 'bar',
                        height: 350,
                        stacked: true,
                        toolbar: {
                            show: true
                        },
                        zoom: {
                            enabled: true
                        }
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            legend: {
                                position: 'bottom',
                                offsetX: -10,
                                offsetY: 0
                            }
                        }
                    }],
                    plotOptions: {
                        bar: {
                            horizontal: false,
                            borderRadius: 10,
                            dataLabels: {
                                total: {
                                    enabled: true,
                                    style: {
                                        fontSize: '13px',
                                        fontWeight: 900
                                    }
                                }
                            }
                        },
                    },
                    xaxis: {
                        categories: ['OK'
                        ],
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return val + " điểm"
                            }
                        }
                    },
                    legend: {
                        position: 'right',
                        offsetY: 40
                    },
                    fill: {
                        opacity: 1
                    }
                },

            },
            percent: {
                series: [{
                    name: 'Marine Sprite',
                    data: [44, 55, 41, 37, 22, 43, 21]
                }, {
                    name: 'Striking Calf',
                    data: [53, 32, 33, 52, 13, 43, 32]
                }, {
                    name: 'Tank Picture',
                    data: [12, 17, 11, 9, 15, 11, 20]
                }, {
                    name: 'Bucket Slope',
                    data: [9, 7, 5, 8, 6, 9, 4]
                }, {
                    name: 'Reborn Kid',
                    data: [25, 12, 19, 32, 25, 24, 10]
                }],
                chartOptions: {
                    chart: {
                        type: 'bar',
                        height: 350,
                        stacked: true,
                        stackType: '100%'
                    },
                    plotOptions: {
                        bar: {
                            horizontal: false,
                        },
                    },
                    stroke: {
                        width: 1,
                        colors: ['#fff']
                    },
                    title: {
                        text: '100% Stacked Bar'
                    },
                    xaxis: {
                        categories: [2008, 2009, 2010, 2011, 2012, 2013, 2014],
                    },
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return val + " điểm"
                            }
                        }
                    },
                    fill: {
                        opacity: 1

                    },
                    legend: {
                        position: 'top',
                        horizontalAlign: 'left',
                        offsetX: 40
                    }
                },

            },
            pie: {
                series: [0, 0, 0],
                chartOptions: {
                    chart: {
                        width: 380,
                        type: 'pie',
                    },
                    labels: ['Làm đúng', 'Làm sai', 'Chưa làm'],
                    tooltip: {
                        y: {
                            formatter: function (val) {
                                return val + " điểm"
                            }
                        }
                    },
                    responsive: [{
                        breakpoint: 480,
                        options: {
                            chart: {
                                width: 200
                            },
                            legend: {
                                position: 'bottom'
                            }
                        }
                    }]
                },

            }
        }
    },
    methods: {
        async handleGetData() {
            const response = await getReportExam(19)
            const data = response.data
            this.amount.series = data.series
            this.amount.chartOptions.xaxis.categories = data.columns_name
            console.log(this.amount.chartOptions.xaxis.categories)
            this.percent.series = data.series
            this.percent.chartOptions.xaxis.categories = data.columns_name
            data.series[0].data.forEach(dataCorrect => {
                this.pie.series[0] += dataCorrect
            })
            data.series[1].data.forEach(dataFail => {
                this.pie.series[1] += dataFail
            })
            data.series[2].data.forEach(dataDont => {
                this.pie.series[2] += dataDont
            })
            this.render = false
            this.$nextTick(() => {
                this.render = true
            })
        }
    }
}
</script>
<style>
.container-report-exam {
    margin: 0 15%;
}
</style>