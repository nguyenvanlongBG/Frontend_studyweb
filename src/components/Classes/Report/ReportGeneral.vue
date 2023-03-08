<template>
    <div class="container-general">
        <div class="title-report">Báo cáo điểm bài thi</div>
        <div class="list-type-statistical">
            <button @click="openGeneral" class="button-action-in-report">Thống kê</button>
            <button @click="openListPoint" class="button-action-in-report">Chi tiết</button>
        </div>
        <div v-if="displayGeneral" class="box-info-report">
            <h3>Điểm</h3>
            <div id="chart-amount">
                <apexchart type="bar" height="350" :options="amount.chartOptions" :series="amount.series"></apexchart>
            </div>
        </div>
        <ListPointComponent v-else />
    </div>
</template>
<script>
import { ref } from 'vue'
import VueApexCharts from 'vue3-apexcharts'
import ListPointComponent from './ListPointComponent.vue'
// import { getReportTest } from '../../services/test'
export default {
    name: "ReportGeneralClass",
    components: {
        apexchart: VueApexCharts,
        ListPointComponent
    },
    setup() {
        const displayGeneral = ref(true)
        return {
            displayGeneral
        }
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
        openGeneral() {
            this.displayGeneral = true
        },
        openListPoint() {
            this.displayGeneral = false
        },
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
        // async handleGetData() {
        //     const response = await getReportTest(this.idTest)
        //     const data = response.data
        //     // console.log(data.series.series_bar)
        //     this.amount.series = data.series.series_bar
        //     this.amount.chartOptions.xaxis.categories = data.horizontal.columns_bar
        //     this.percent.series = data.series.series_bar
        //     this.percent.chartOptions.xaxis.categories = data.horizontal.columns_bar
        //     this.score.chartOptions.xaxis.categories = data.horizontal.scoreName
        //     this.score.series[0].data = data.series.seriesScore
        //     this.render = false
        //     this.$nextTick(() => {
        //         this.render = true
        //     })
        // }
    }
}
</script>
<style>
.container-general {
    margin-top: 5px;
}

.list-type-statistical {
    display: flex;
}

.title-report {
    font-size: 25px;
    font-weight: bold;
}

.button-action-in-report {
    display: flex;
    padding: 3px 3px;
    /* height: 35px; */
    border: 2px solid #222;
    border-radius: 5px;
    box-shadow: 0 8px #999;
    /* flex-basis: 25px; */
    justify-content: center;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
}

.button-action-in-report:active {
    box-shadow: 0 5px #666;
    background-color: #dfdcdc;
    color: #222;
    transform: translateY(4px);
}

.box-info-report {
    margin-top: 10px;
}
</style>