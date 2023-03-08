<template>
    <div class="container-report-exam" v-if="render">
        <h2>Báo cáo bài thi</h2>
        <h3>Điểm</h3>
        <div id="chart-amount">
            <apexchart type="bar" height="350" :options="amount.chartOptions" :series="amount.series"></apexchart>
        </div>
        <h2>Báo cáo theo chương</h2>
        <div>
            <h3>Điểm</h3>
            <div>
                <button @click="chartQuantityChapter">Số lượng</button>
                <button @click="chartPercentChapter">Tỷ lệ</button>
            </div>
        </div>
        <div id="chart-percent" v-if="refresh">
            <apexchart type="bar" height="350" :options="percent.chartOptions" :series="percent.series"></apexchart>
        </div>
        <h2>Báo cáo theo mức độ</h2>
        <div>
            <h3>Điểm</h3>
            <div>
                <button @click="chartQuantityChapter">Số lượng</button>
                <button @click="chartPercentChapter">Tỷ lệ</button>
            </div>
        </div>
        <div id="chart-percent" v-if="refresh">
            <apexchart type="bar" height="350" :options="percent.chartOptions" :series="percent.series"></apexchart>
        </div>
        <!-- <h2>Phổ điểm</h2>
        <div id="chart-score spectrum">
            <apexchart type="area" height="350" :options="score.chartOptions" :series="score.series"></apexchart>
        </div> -->
    </div>
</template>
<script>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import VueApexCharts from 'vue3-apexcharts'
import { getReportTest } from '../../services/test'
export default {
    name: "ReportComponent",
    components: {
        apexchart: VueApexCharts,
    },
    setup() {
        const idTest = parseInt(useRoute().params.idTest)
        const render = ref(true)
        const refresh = ref(true)
        return {
            idTest, render, refresh
        }
    },
    mounted() {
        this.handleGetData()
    },
    data() {
        return {
            amount: {
                series: [{
                    name: 'Đúng',
                    data: [9, 8, 7, 8, 9, 9, 9, 8, 7, 8, 9, 9, 9, 8, 7, 8, 9, 9, 9, 8, 7, 8, 9, 9, 9, 8, 7, 8, 9, 9,
                        9, 8, 7, 8, 9, 9,
                        9, 8, 7, 8, 9, 9,
                        9, 8, 7, 8, 9, 9,
                        9, 8, 7, 8, 9, 9,
                        9, 8, 7, 8, 9, 9,
                    ]
                }, {
                    name: 'Sai',
                    data: [1, 0, 1, 2, 0, 1, 1, 0, 1, 2, 0, 0.5, 1, 0, 1, 2, 0, 0.5, 1, 0, 1, 2, 0, 0.5, 1, 0, 1, 2, 0, 0.5,
                        1, 0, 1, 2, 0, 1, 1, 0, 1, 2, 0, 0.5, 1, 0, 1, 2, 0, 0.5, 1, 0, 1, 2, 0, 0.5, 1, 0, 1, 2, 0, 0.5,
                        1, 0, 1, 2, 0, 0.5,
                    ]
                }, {
                    name: 'Chưa làm',
                    data: [
                        0, 0, 0, 0.1, 1, 2, 1,
                        0, 0, 0, 0.1, 1, 2, 1,
                        0, 0, 0, 0.1, 1, 2, 1,
                        0, 0, 0, 0.1, 1, 2, 1,
                        0, 0, 0, 0.1, 1, 2, 1,
                        0, 0, 0, 0.1, 1, 2, 1,
                        0, 0, 0, 0.1, 1, 2, 1,
                        0, 0, 0, 0.1, 1, 2, 1,
                        0, 0, 0, 0.1, 1, 2, 1,
                    ]
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
                            enabled: true,

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
                        tickPlacement: 'on',
                        type: 'String',
                        categories: ['Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                            'Bài 1', 'Bài 2', 'Bài 3', 'Bài 4',
                        ],
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
                    name: 'Đúng',
                    data: [44, 55, 41, 37, 22, 43, 21]
                }, {
                    name: 'Sai',
                    data: [53, 32, 33, 52, 13, 43, 32]
                }, {
                    name: 'Chưa làm',
                    data: [12, 17, 11, 9, 15, 11, 20]
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
                        text: '100% Chương'
                    },
                    xaxis: {
                        categories: [
                            'Bất đẳng thức', 'Hàm số', 'Hình học không gian',
                            'Tích phân', 'Đạo hàm', 'Hình học giải tích'],
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
        chartQuantityChapter() {
            console.log("OK")
            this.percent.chartOptions.chart.stackType = null
            this.refresh = false
            this.$nextTick(() => {
                this.refresh = true
            })
        },
        chartPercentChapter() {
            console.log("OK")
            this.percent.chartOptions.chart.stackType = '100%'
            this.refresh = false
            this.$nextTick(() => {
                this.refresh = true
            })

        },
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