<template  v-if="render">

    <HistoryExamComponent>
        <template v-slot:tabs>
            <div class="tabs-exam">
                <div class="tab-exam" @click="getExam()">Bài thi 1
                </div>
                <div class="tab-exam" @click="getExam()">Bài thi 2
                </div>
                <div class="tab-exam" @click="getExam()">Bài thi 3
                </div>
                <div class="tab-exam" @click="getExam()">Bài thi 4
                </div>
            </div>
        </template>
    </HistoryExamComponent>

</template>
<script>
import HistoryExamComponent from '../Exam/HistoryExamComponent.vue';
import { getExams } from '../../services/exam'
import { useRoute } from 'vue-router';
export default {
    name: "HistoryTestComponent",
    components: {
        HistoryExamComponent
    },
    setup() {
        const idTest = parseInt(useRoute().params.idTest)
        return {
            idTest
        }

    },

    create() {
        this.$watch(
            () => this.$route.query,
            () => {
                this.handleGetData()
            }
        )
    },
    mounted() {
        this.handleGetData()
    },
    methods: {
        refreshData() {

        },
        async handleGetData() {
            let condition = { idTest: this.idTest }
            console.log(condition)
            const response = await getExams(condition)
            console.log(response)
        }
    }
}
</script>
<style>
.tabs-exam {
    display: flex;

}

.tab-exam {
    background-color: white;
    background: #222;
    color: #f3f3f3;
    border: 1px solid #ea4f4c;
    display: block;
    font-weight: 600;
    padding: 5px 5px;
    text-align: center;
    text-decoration: none;
}

.tab-exam:first-child {
    border-right: 0;
    border-top-left-radius: 6px;
}



.tab-exam:active {
    background: #fff;
    border-bottom-color: transparent;
    color: #2db34a;
    cursor: default;
}

.tab-active {
    background: #fff;
    border-bottom-color: transparent;
    color: #2db34a;
    cursor: default;
}

.page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.pagination {
    display: flex;
    justify-content: center;
}

.margin-bottom10px {
    margin-bottom: 10px;
}

.create-button-first {
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

.update-create-question-button {
    margin-left: 5px;
    margin-top: 2px;
    height: 45px;
    padding: 5px;
    font-size: 20px;
    font-weight: 400;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.info-list-question {
    width: 79%;
    margin-top: 3px;
    margin-right: 2px;
    position: absolute;
    right: 0;
}

.end-action {
    display: flex;
    justify-content: flex-end;
    margin-bottom: 10px;
}

@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>