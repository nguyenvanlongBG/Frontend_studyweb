<template>
    <div class="container-report-exam" v-if="render">
        <h2>Báo cáo bài thi</h2>
        <div class="list-type-report">
            <button class="type-report">Lượt làm bài</button>
            <button class="type-report">Điểm trung bình</button>
        </div>
        <h3>Số lượt làm bài</h3>
        <div id="chart-amount">
            <apexchart type="bar" height="350" :options="amount.chartOptions" :series="amount.series"></apexchart>
        </div>
        <h2>Báo cáo theo chương</h2>
        <div class="box-filter">
            <div class="content-filters">
                <VueMultiselect :class="colorSelect" v-model="filterChapters" open-direction="bottom"
                    :options="chapters ? chapters : []" :multiple="true" :close-on-select="false" :clear-on-select="false"
                    :preserve-search="true" placeholder="Chương" label="name" track-by="name" :preselect-first="false"
                    @select="selectItems" @remove="removeItems">
                </VueMultiselect>
                <VueMultiselect :class="colorSelect" v-model="selectLevels" open-direction="bottom"
                    :options="levels ? levels : []" :multiple="true" :close-on-select="false" :clear-on-select="false"
                    :preserve-search="true" placeholder="Mức độ" label="name" track-by="name" :preselect-first="false"
                    @select="selectItems" @remove="removeItems">
                </VueMultiselect>
            </div>
            <div class="icon-search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div class="list-type-report">
            <button class="type-report" @click="chartQuantityChapter">Số lượng</button>
            <button class="type-report" @click="chartPercentChapter">Tỷ lệ</button>
        </div>
        <div class="chart-percent" id="chart-percent" v-if="refresh">
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
import VueMultiselect from 'vue-multiselect'
export default {
    name: "ReportTeacherComponent",
    components: {
        apexchart: VueApexCharts, VueMultiselect
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
            filterChapters: [],
            selectLevels: [],
            chapters: [
                { id: 1, name: "Tích phân" }, { id: 2, name: "Hàm số" }, { id: 3, name: "Hình học" }, { id: 4, name: "Bất đẳng thức" },
                { id: 5, name: "Tích phân NC" }, { id: 6, name: "Hàm số NC" }, { id: 7, name: "Hình học NC" }, { id: 8, name: "Bất đẳng thức mở rộng" }
            ],
            levels: [{ id: 1, name: "Nhận biết" }, { id: 2, name: "Thông hiểu" }, { id: 3, name: "Vận dụng" }, { id: 4, name: "Vận dụng cao" }],
            amount: {
                series: [{
                    name: 'Số lượt làm bài',
                    data: [9.9, 8.9, 7.1, 8, 9, 9, 9, 8, 7, 8, 9, 9, 9, 8, 7, 8, 9, 9, 9, 8, 7, 8, 9, 9, 9, 8, 7, 8, 9, 9,
                        9, 8, 7, 8, 9, 9,
                        9, 8, 7, 8, 9, 9,
                        9, 8, 7, 8, 9, 9,
                        9, 8, 7, 8, 9, 9,
                        9, 8, 7, 8, 9, 9,
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

.list-type-report {
    display: flex;
    margin-top: 5px;
}

.type-report {
    display: flex;
    padding: 4px 4px;
    /* height: 35px; */
    border: 2px solid #ea4f4c;
    border-radius: 5px;
    box-shadow: 0 8px #999;
    /* flex-basis: 25px; */
    justify-content: center;
    align-items: center;
    font-size: 15px;
    cursor: pointer;
    margin-left: 5px;
}

.type-report:active {
    box-shadow: 0 5px #666;
    background-color: #dfdcdc;
    color: #222;
    transform: translateY(4px);
}

.box-filter {
    display: flex
}

.content-filters {
    display: flex;
    width: 100%
}

.icon-search {
    display: flex;
    padding-left: 5px;
    padding-right: 5px;
    border: 2px solid #ea4f4c;
    border-radius: 5px;
    box-shadow: 0 8px #999;
    flex-basis: 25px;
    justify-content: center;
    align-items: center;
    background-color: white;
    font-size: 25px;
    cursor: pointer;
}

.icon-search:active {
    box-shadow: 0 5px #666;
    background-color: aliceblue;
    color: #222;
    transform: translateY(4px);
}

.chart-percent {
    margin-top: 10px
}

/* @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css"; */
@import url('vue-multiselect/dist/vue-multiselect.css');
</style>