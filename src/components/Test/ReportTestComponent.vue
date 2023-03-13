<template>
    <div class="container-report-exam" v-if="render">
        <h2>Báo cáo câu hỏi</h2>
        <h3>Số lượng</h3>
        <div id="chart-amount">
            <apexchart type="bar" height="350" :options="amount.chartOptions" :series="amount.series"></apexchart>
        </div>
        <h3>Tỷ lệ</h3>
        <div id="chart-percent">
            <apexchart type="bar" height="350" :options="percent.chartOptions" :series="percent.series"></apexchart>
        </div>
        <h2>Phổ điểm</h2>
        <div id="chart-score spectrum">
            <apexchart type="area" height="350" :options="score.chartOptions" :series="score.series"></apexchart>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import VueApexCharts from 'vue3-apexcharts'
import { getReportTest } from '../../services/test'
export default {
    name: "ReportTestComponent",
    components: {
        apexchart: VueApexCharts,
    },
    setup() {
        const idTest = null
        const render = ref(true)
        return {
            idTest, render
        }
    },
    created() {
        if (this.testId) {
            this.idTest = this.testId
        } else {
            this.idTest = parseInt(useRoute().params.idTest)
        }
    },
    mounted() {
        this.handleGetData()
    },
    data() {
        return {
            amount: {
                series: [{
                    name: 'PRODUCT A',
                    data: [44, 55, 41, 1, 2, 3, 4, 5, 6, 7, 9, 15, 16, 17, 18, 19, 20, 21, 22]
                }, {
                    name: 'PRODUCT B',
                    data: [13.2, 23, 20, 1, 2, 3, 4, 5, 6, 7, 9, 10, 11, 17, 18, 19, 20, 21, 22]
                }, {
                    name: 'PRODUCT C',
                    data: [11, 17.31, 15, 1, 2, 3, 4, 5, 6, 7, 9, 11, 12, 17, 18, 19, 20, 21, 22]
                }, {
                    name: 'PRODUCT D',
                    data: [21, 7, 25, 1, 2, 3, 4, 5, 6, 7, 9, 13, 14, 17, 18, 19, 20, 21, 22]
                },


                ],
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
                        // type: 'datetime',
                        categories: ['01/01/2011 GMT', '01/02/2011 GMT', '01/03/2011 GMT', '01/04/2011 GMT',
                            '01/05/2011 GMT', '01/06/2011 GMT', '02/05/2011 GMT', '03/06/2011 GMT', '02/05/2011 GMT', '03/06/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT', '02/05/2011 GMT', '03/06/2011 GMT', '02/05/2011 GMT', '03/06/2011 GMT', '01/05/2011 GMT', '01/06/2011 GMT', '02/05/2011 GMT'
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
                            horizontal: true,
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
            score: {
                chartOptions: {
                    dataLabels: {
                        enabled: false
                    },
                    stroke: {
                        curve: 'smooth'
                    },
                    xaxis: {
                        categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
                    },
                    tooltip: {
                        fixed: {
                            enabled: false,
                            position: 'topRight'
                        }
                    }
                }
                ,
                series: [{
                    name: 'Số lượng',
                    data: [31, 40, 28, 51, 42, 109, 100]
                }],

            }
        }
    },
    methods: {
        async handleGetData() {
            const response = await getReportTest(this.idTest)
            const data = response.data
            // console.log(data.series.series_bar)
            this.amount.series = data.series.series_bar
            this.amount.chartOptions.xaxis.categories = data.horizontal.columns_bar
            this.percent.series = data.series.series_bar
            this.percent.chartOptions.xaxis.categories = data.horizontal.columns_bar
            this.score.chartOptions.xaxis.categories = data.horizontal.scoreName
            this.score.series[0].data = data.series.seriesScore
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