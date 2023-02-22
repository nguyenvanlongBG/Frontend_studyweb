<template>
    <div class="modal-answer-overlay">
        <div class="container-list-exam">
            <div class="header-list-exams">
                <h1>
                    Ngân hàng câu hỏi
                </h1>
                <div class="filters">
                    <div class="filter">
                        <VueMultiselect :options="listFilters" :multiple="true" :close-on-select="false"
                            :clear-on-select="false" :preserve-search="true" placeholder="Folder" label="name"
                            track-by="name" :preselect-first="true">
                        </VueMultiselect>
                    </div>
                    <div class="filter">
                        <VueMultiselect :options="listFilters" :multiple="true" :close-on-select="false"
                            :clear-on-select="false" :preserve-search="true" placeholder="Chương" label="name"
                            track-by="name" :preselect-first="true">
                        </VueMultiselect>
                    </div>
                    <div class="filter">
                        <VueMultiselect :options="listFilters" :multiple="true" :close-on-select="false"
                            :clear-on-select="false" :preserve-search="true" placeholder="Mức độ" label="name"
                            track-by="name" :preselect-first="true">
                        </VueMultiselect>
                    </div>
                    <button class="status-mark" :style="pressAll ? styleObject : ''" @click="filterStatus(0)">
                        <i class="fa-solid fa-filter"></i> Lọc
                    </button>

                </div>
            </div>
            <div class="container-table">

                <div class="table">
                    <div class="table-header">
                        <div class="header__item choice-question-label">
                            <a id="name" class="filter__link" href="#">
                                Chọn
                            </a>
                        </div>
                        <div class="header__item question-content-label">
                            <a id="wins" class="filter__link filter__link--number" href="#">Câu hỏi</a>
                        </div>
                        <div class="header__item chapter-label">
                            <a id="draws" class="filter__link filter__link--number" href="#">Chương</a>
                        </div>
                        <div class="header__item level-label">
                            <a id="losses" class="filter__link filter__link--number" href="#">Mức độ</a>
                        </div>
                        <div class="header__item folder-label">
                            <a id="total" class="filter__link filter__link--number" href="#">Folder</a>
                        </div>
                        <div class="header__item used-label">
                            <a id="total" class="filter__link filter__link--number" href="#">Đã sử dụng gần đây</a>
                        </div>
                    </div>
                    <div class="table-content">
                        <div class="table-row" v-for="(question, index) in questions" :key="index">
                            <div class="table-data-choice">
                                <input name="list-questions-choice" type="checkbox" class="choice-question" />
                            </div>
                            <div class="table-data-question-content">
                                <div class="content-question">
                                    <QuestionComponent :question="question" type="5" isOwner="true" />
                                </div>
                            </div>
                            <div class="table-data-chapter">OK</div>
                            <div class="table-data-level">OK</div>
                            <div class="table-data-folder">
                                Lớp 12 2023
                            </div>
                            <div class="table-data-used">
                                Đề 1
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button @click="close()" class="close-modal-solution">X</button>
    </div>
</template>

<script>
import { ref } from 'vue';
import VueMultiselect from 'vue-multiselect'
import QuestionComponent from '../Question/QuestionComponent.vue';
export default {
    name: "QuestionBankComponent",
    components: {
        VueMultiselect,
        QuestionComponent
    },
    setup() {
        const solution = ref({})
        const render = ref(true)
        return {
            solution, render
        }
    },
    data() {
        return {
            listFilters: [{ id: 1, name: "OK" }],
            questions: [
                { question: { question_id: 1, content: 'OK1', page: 1, type: 1, index: 1, result_id: "", contentResult: "", scope: 1, dependence_id: 1 } },
                {
                    question: { question_id: 2, content: 'OK2', page: 1, type: 2, index: 1, result_id: "", contentResult: "", scope: 1, dependence_id: 1 },
                    choices: [
                        { id: 3, question_id: 2, content: '<p>Phương án A</p>' },
                        { id: 4, question_id: 2, content: '<p>Phương án B</p>' },
                        { id: 5, question_id: 2, content: '<p>Phương án C</p>' },
                        { id: 6, question_id: 2, content: '<p>Phương án D</p>' }
                    ]
                },

            ]
        }
    },
    mounted() {
        this.handleGetData()
    },
    props: ['idSolution'],
    methods: {
        async handleGetData() {

        },
        close() {
            this.$emit('close')
        },
        answerQuestion() {

        }
    }
}

</script>
<style scoped>
.modal-answer-overlay {
    position: fixed;
    padding: 25px;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #000000da;
    z-index: 100;
}


.container-list-exam {
    width: 100%;
}

.choice-question-label {
    flex-basis: 5%;
}

.question-content-label {
    flex-basis: 55%;
}

.chapter-label {
    flex-basis: 10%;
}

.level-label {
    flex-basis: 10%;
}

.folder-label {
    flex-basis: 10%;
}

.used-label {
    flex-basis: 10%;
}

.filters {
    display: flex;
    align-items: center;
    z-index: 101;
}

.filter {
    margin-left: 5px;
    min-width: 200px;
    max-width: 400px;
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
    /* min-height: 500px; */
}

.table {
    width: 100%;
    border: 1px solid #eeeeee;
    /* max-height: 600px; */
}

.table-header {
    display: flex;
    width: 100%;
    background: #000;
    padding: 18px 0;
    position: sticky;
    top: 0px;
    z-index: 100;
}

.table-content {
    height: 500px;
    overflow-y: scroll;
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

.table-row:nth-of-type(even) {
    background: #cee5f4;
}

.table-data-choice {
    flex: 5%;
    display: flex;
    justify-content: center;
    align-items: center;
}

input.choice-question {
    width: 15px;
}

.table-data-question-content {
    flex: 55%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.content-question {
    width: 100%;
}

.table-data-chapter {
    flex: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.table-data-level {
    flex: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.table-data-folder {
    flex: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.table-data-used {
    flex: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.header__item {
    /* flex: 1 1 20%; */
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

.close-modal-solution {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: blueviolet;
}
</style>