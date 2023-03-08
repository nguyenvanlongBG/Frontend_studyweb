<template>
    <div>
        <h2>Chi tiết</h2>
        <div class="container-filters">
            <div class="box-filters">
                <div class="tests-users">
                    <div class="filter-tests">
                        <VueMultiselect :class="colorSelect" v-model="selectTests" open-direction="bottom"
                            :options="listTest" :multiple="true" :close-on-select="false" :clear-on-select="false"
                            :preserve-search="true" placeholder="Kỳ thi" label="name" track-by="name"
                            :preselect-first="false" @select="selectItems" @remove="removeItems">
                        </VueMultiselect>
                    </div>
                    <div class="search-users">
                        <VueMultiselect :class="colorSelect" v-model="selectTests" open-direction="bottom"
                            :options="listTest" :multiple="true" :close-on-select="false" :clear-on-select="false"
                            :preserve-search="true" placeholder="Tên học sinh" label="name" track-by="name"
                            :preselect-first="false" @select="selectItems" @remove="removeItems">
                        </VueMultiselect>
                    </div>
                </div>
                <div class="chapters-levels">
                    <div class="filter-chapter">
                        <VueMultiselect :class="colorSelect" v-model="selectTests" open-direction="bottom"
                            :options="listTest" :multiple="true" :close-on-select="false" :clear-on-select="false"
                            :preserve-search="true" placeholder="Chương" label="name" track-by="name"
                            :preselect-first="false" @select="selectItems" @remove="removeItems">
                        </VueMultiselect>
                    </div>
                    <div class="filter-level">
                        <VueMultiselect :class="colorSelect" v-model="selectTests" open-direction="bottom"
                            :options="listTest" :multiple="true" :close-on-select="false" :clear-on-select="false"
                            :preserve-search="true" placeholder="Mức độ" label="name" track-by="name"
                            :preselect-first="false" @select="selectItems" @remove="removeItems">
                        </VueMultiselect>
                    </div>
                </div>
            </div>
            <div class="icon-search">
                <i class="fa-solid fa-magnifying-glass"></i>
            </div>
        </div>
        <div class="list-type-statistical">
            <button class="button-action-in-report" @click="chartQuantityChapter">Số lượng</button>
            <button class="button-action-in-report" @click="chartPercentChapter">Tỷ lệ</button>
        </div>
        <div id="chart-percent" class="chart-statistical" v-if="refresh">
            <apexchart type="bar" height="350" :options="percent.chartOptions" :series="percent.series"></apexchart>
        </div>
    </div>
</template>
<script>
// import { ref } from 'vue'
// import { useRoute } from 'vue-router'
import VueApexCharts from 'vue3-apexcharts'
// import { getReportTest } from '../../services/test'
import VueMultiselect from 'vue-multiselect'
import { ref } from 'vue'

export default {
    name: "ReportFilterClass",
    components: {
        apexchart: VueApexCharts,
        VueMultiselect
    },
    setup() {
        const refresh = ref(true)
        return {
            refresh
        }
    },
    data() {
        return {
            selectTests: [],
            listTest: [{
                id: 1,
                name: "Test 1"
            }],
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
                            'Nguyễn Văn A', 'Nguyễn Thị B', 'Nguyễn Văn OK',
                            'Ừ', 'OK Man', 'Ok Bro'],
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
<style scoped>
.container-filters {
    display: flex;
    width: 100%;
}

.list-type-statistical {
    display: flex;
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

.box-filters {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.tests-users {
    width: 100%;
    display: flex;
}

.filter-tests {
    width: 75%;
}

.search-users {
    width: 25%;
}

.chapters-levels {
    width: 100%;
    display: flex;
}

.filter-chapter {
    width: 75%;
}

.filter-level {
    width: 25%;
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

.chart-statistical {
    margin-top: 10px;
}
</style>