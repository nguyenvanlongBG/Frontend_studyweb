<template  v-if="render">
    <!-- <NavbarListComponent /> -->
    <div class="history-exam">
        <NavbarListComponent :numericalQuestion="numericalQuestion" @moveQuestion="moveQuestion" />
        <div class="info-list-question">
            <slot name="list-tabs"></slot>
            <LoadingComponent v-if="isLoading"></LoadingComponent>
            <template v-else>
                <div class="buttons-exam">
                    <h3>Điểm {{ point }}</h3>
                    <button class="report-exam" @click="reportExam">Báo cáo</button>
                </div>
                <div class="page">
                    <h2>
                        Trang {{ currentPage }}
                    </h2>
                </div>
                <QuestionComponent v-for="(question, index) in  questions" :key="index" :question="question"
                    :ref="'question_' + question.question.question_id" :id="'question_' + question.question.question_id"
                    :index="startIndex + index" :type="3" :isOwner="isOwner" />
                <div class="end-action">

                </div>
                <paginate :page-count="totalPage" :page-range="3" :margin-pages="2" :click-handler="clickCallback"
                    :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'"
                    :active-class="'active-class'">
                </paginate>
            </template>
        </div>
    </div>
</template>
<script>
import QuestionComponent from '../Question/QuestionComponent.vue';
import Paginate from 'vuejs-paginate-next';
import { getNumericalQuestion } from '../../services/test'
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router';
import LoadingComponent from '../common/LoadingComponent.vue';
import NavbarListComponent from "../Test/NavbarListComponent.vue"
import { getExamHistory } from '@/services/exam';
import router from '@/router';
export default {
    name: "HistoryExamComponent",
    components: {
        QuestionComponent,
        paginate: Paginate,
        NavbarListComponent,
        LoadingComponent,
    },
    setup() {
        const idTest = parseInt(useRoute().params.idTest)
        const isLoading = ref(false)
        const canUpdate = ref(true)
        const questions = ref([])
        const currentPage = ref(1)
        const totalPage = ref(1)
        const startIndex = ref(1)
        const numericalQuestion = ref([])
        const moveTo = ref("")
        const render = ref(true)
        const indexNewQuestion = ref(0)
        const point = ref(0)
        const isOwner = ref(false)
        return {
            idTest,
            isLoading,
            canUpdate,
            questions,
            currentPage,
            totalPage,
            startIndex,
            numericalQuestion,
            moveTo,
            indexNewQuestion,
            isOwner,
            point,
            render
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
    watch: {
        $route(to, from) {
            console.log(from)
            this.examId = to.params.idExam;
            this.handleGetData()
        },
    },
    data() {
        return {
            examId: useRoute().params.idExam
        }
    },
    mounted() {
        this.handleGetData()
    },
    methods: {
        refreshData() {
            this.listQuestionFollow = new Set(),
                this.questionsDelete = [],
                this.sendData = {
                    'questions': {
                        'create': [],
                        'update': [],
                        'delete': [],
                        'deleteResult': [], // Question fill and essay
                        'updateResults': [] // Question fill and essay
                    },
                    'choices': {
                        'create': [],
                        'update': [],
                        'delete': [],
                    }
                }
        },
        async handleGetData() {

            var paramsQuestion = {
                idExam: this.examId,
                current_page: this.currentPage
            };
            try {
                const responseQuestions = await getExamHistory(this.idTest, paramsQuestion);
                if (responseQuestions) {
                    this.questions = responseQuestions.data?.questions
                    this.answersData = responseQuestions.data?.answers
                    this.examId = responseQuestions.data?.exam_id
                    this.point = responseQuestions.data?.point
                    this.isOwner = responseQuestions.data?.isOwner
                    console.log(responseQuestions.data?.pages)
                    let pages = responseQuestions.data?.pages
                    this.startIndex = pages.startIndex
                    this.totalPage = pages.totalPage
                }
                var paramsNumerical = {
                    exam_id: this.examId,
                    current_page: this.currentPage,
                    type: 3
                    // 1: Do 2: Update 3: History
                };
                const responseNumerical = await getNumericalQuestion(this.idTest, paramsNumerical)
                if (responseNumerical) {
                    this.numericalQuestion = responseNumerical.data
                }
            } finally {
                this.isLoading = false
            }
        },
        addlistQuestionFollow(id) {
            // Add id question to list question update
            console.log(id)
            this.listQuestionFollow.add(id);
        },

        clickCallback(pageNum) {
            this.currentPage = pageNum
            this.handleGetData()
        },
        Next(pageNum) {
            this.page = pageNum
            this.handleGetData()
        },
        Prev(pageNum) {
            this.page = pageNum
            this.handleGetData()
        },
        reportExam() {
            router.push({ name: "reportExam", params: { idTest: this.idTest, idExam: this.examId } });
        },
        moveQuestion(page, id) {

            if (page == this.currentPage) {
                this.moveTo = id;
                let question = document.getElementById(id);
                question.scrollIntoView();
            } else {
                this.currentPage = page;
                this.moveTo = id;
                this.handleGetData();
                setTimeout(() => {
                    let question = document.getElementById(id);
                    question.scrollIntoView();
                }, 1000)


            }
        }
    }
}
</script>
<style>
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

.buttons-exam {
    display: flex;
    justify-content: flex-end;
}

.report-exam {
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

.report-exam:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
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


@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>