<template>
    <div class="container-list-exam">
        <div class="header-list-exams">
            <h1>
                Danh sách bài thi
            </h1>
            <div class="mark-type-filter">
                <button class="status-mark green" :style="pressNotCompleteMarked ? styleObject : ''"
                    @click="filterStatus(2)">
                    Chưa chấm
                </button>
                <button class="status-mark blue" :style="pressMarked ? styleObject : ''" @click="filterStatus(1)">
                    Đã chấm
                </button>
                <button class="status-mark" :style="pressAll ? styleObject : ''" @click="filterStatus(0)">
                    Tất cả
                </button>
                <button class="status-mark" :style="pressStatistical ? styleObject : ''" @click="statistical()">
                    Thống kê
                </button>
            </div>
        </div>
        <div class="container-table">

            <div class="table">
                <div class="table-header">
                    <div class="header__item"><a id="name" class="filter__link" href="#">Mã bài thi</a></div>
                    <div class="header__item"><a id="wins" class="filter__link filter__link--number" href="#">Họ và
                            tên</a>
                    </div>
                    <div class="header__item"><a id="draws" class="filter__link filter__link--number" href="#">Thời gian
                            nộp bài</a>
                    </div>
                    <div class="header__item"><a id="losses" class="filter__link filter__link--number" href="#">Điểm</a>
                    </div>
                    <div class="header__item"><a id="total" class="filter__link filter__link--number" href="#">Hành
                            động</a>
                    </div>
                </div>
                <div class="table-content" v-for="exam in exams" :key="exam.id">
                    <div class="table-row">
                        <div class="table-data">#{{ exam.id }}</div>
                        <div class="table-data">{{ exam.user_name }}</div>
                        <div class="table-data"></div>
                        <div class="table-data">{{ exam.point }}</div>
                        <div class="table-data">
                            <button class="tool-button-mark green" @click="mark(exam.id)" v-if="!exam.is_marked">
                                Chấm
                            </button>
                            <button class="tool-button-mark blue" @click="mark(exam.id)" v-if="exam.is_marked">
                                Chấm lại
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import router from '@/router';
import { getExams } from '@/services/test';
import { ref } from 'vue';
import { useRoute } from 'vue-router';

export default {
    name: "ListExamComponent",
    setup() {
        const idTest = parseInt(useRoute().params.idTest)
        const filter = ref({
            status: 0
        })
        const pressAll = ref(true)
        const pressStatistical = ref(false)
        const pressMarked = ref(false)
        const pressNotCompleteMarked = ref(false)
        const styleObject = ref({
            "box-shadow": "0 5px #666",
            "transform": "translateY(4px)"
        })
        return {
            idTest, filter, styleObject, pressAll, pressStatistical, pressMarked, pressNotCompleteMarked
        }
    },
    data() {
        return {
            exams: []
        }
    },
    mounted() {
        this.handleGetData()
    },
    methods: {
        mark(examId) {
            router.push({ name: 'markExam', params: { idExam: examId } })
        },
        refreshButton() {
            this.pressAll = false,
                this.pressMarked = false,
                this.pressNotCompleteMarked = false,
                this.pressStatistical = false
        },
        filterStatus(status) {
            this.refreshButton()
            if (status == 0) {
                this.pressAll = true
            }
            if (status == 1) {
                this.pressMarked = true
            }
            if (status == 2) {
                this.pressNotCompleteMarked = true
            }
            this.filter.status = status
        },
        statistical() {
            this.refreshButton()
            this.pressStatistical = true
        },
        async handleGetData() {
            const response = await getExams(this.idTest, this.filter)
            this.exams = response.data
        }
    }
}
</script>
<style scoped>
.container-list-exam {
    margin: 0 15%;
}

.mark-type-filter {
    display: flex;
    align-items: center;
}

.status-mark {
    margin-left: 2px;
    margin-top: 2px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.status-mark:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

@import url("https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700");

*,
*:before,
*:after {
    box-sizing: border-box;
}

body {
    padding: 24px;
    font-family: "Source Sans Pro", sans-serif;
    margin: 0;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    margin: 0;
}

.header-list-exams {
    display: flex;
    justify-content: space-between;
}

.container-table {
    margin-top: 20px;
    /* margin-right: auto;
    margin-left: auto; */
    display: flex;
    justify-content: center;
    align-items: flex-start;
    min-height: 100vh;
}

.table {
    width: 100%;
    border: 1px solid #eeeeee;
    max-height: 600px;
    overflow-y: scroll;
}

.table-header {
    display: flex;
    width: 100%;
    background: #000;
    padding: 18px 0;
    position: sticky;
    top: 0px;
}

.table-row {
    display: flex;
    width: 100%;
    padding: 18px 0;
    border-bottom: 2px solid rgb(202, 198, 198);
}


.tool-button-mark {
    margin-left: 2px;
    margin-top: 2px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.tool-button-mark:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.blue {
    background-color: blue;
}

.green {
    background-color: green;
}

.table-row:nth-of-type(odd) {
    background: #eeeeee;
}

.table-data,
.header__item {
    flex: 1 1 20%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header__item {
    text-transform: uppercase;
}

.filter__link {
    color: white;
    text-decoration: none;
    position: relative;
    display: inline-block;
    padding-left: 24px;
    padding-right: 24px;
}

.filter__link::after {
    content: "";
    position: absolute;
    right: -18px;
    color: white;
    font-size: 12px;
    top: 50%;
    transform: translateY(-50%);
}

.filter__link.desc::after {
    content: "(desc)";
}

.filter__link.asc::after {
    content: "(asc)";
}
</style>