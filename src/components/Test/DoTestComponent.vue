<template  v-if="render">
    <!-- <NavbarListComponent /> -->
    <NavbarListComponent :numericalQuestion="numericalQuestion" @moveQuestion="moveQuestion" />
    <div class="info-list-question">
        <h1>Làm bài thi</h1>
        <LoadingComponent v-if="isLoading"></LoadingComponent>
        <template v-else>
            <div class="page">
                <h2>
                    Trang {{ currentPage }}
                </h2>
            </div>
            <QuestionComponent v-for="(question, index) in  questions" :key="index" :question="question"
                :ref="'question_' + question.question.question_id" :id="'question_' + question.question.question_id"
                :index="startIndex + index" :type="1" :send="sendData" />
            <div class="end-action">

                <button class="update-create-question-button" @click="save" v-if="canUpdate">
                    Lưu câu trả lời
                </button>
            </div>
            <paginate :page-count="totalPage" :page-range="3" :margin-pages="2" :click-handler="clickCallback"
                :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'"
                :active-class="'active-class'">
            </paginate>

        </template>
    </div>
</template>
<script>
import QuestionComponent from '../Question/QuestionComponent.vue';
import Paginate from 'vuejs-paginate-next';
import { getQuestionTestUpdate } from '../../services/question'
import { getNumericalQuestion } from '../../services/test'
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router';
import LoadingComponent from '../common/LoadingComponent.vue';
import NavbarListComponent from "../Test/NavbarListComponent.vue"
export default {
    name: "DoTestComponent",
    components: {
        QuestionComponent,
        paginate: Paginate,
        NavbarListComponent,
        LoadingComponent
    },
    setup() {
        const idTest = null
        const isLoading = ref(false)
        const canUpdate = ref(true)
        const isUpdateEssay = ref(false)
        const questions = ref([])
        const currentPage = ref(1)
        const totalPage = ref(1)
        const startIndex = ref(1)
        const numericalQuestion = ref([])
        const moveTo = ref("")
        const render = ref(true)
        const indexNewQuestion = ref(0)
        const sendData = ref({
            'questions': {
                'create': [],
                'update': [],
                'delete': [],
                'deleteResults': [], // Question fill and essay
                'updateResults': [] // Question fill and essay

            },
            'choices': {
                'create': [],
                'update': [],
                'delete': [],
            }
        })
        // const answersUpdate = ref([])
        // const answersDelete = ref([])
        // const answersCreate = ref([])
        return {
            idTest,
            isLoading,
            canUpdate,
            isUpdateEssay,
            questions,
            currentPage,
            totalPage,
            startIndex,
            numericalQuestion,
            moveTo,
            sendData,
            indexNewQuestion,
            render
        }
    },
    props: ['testId'],
    created() {
        if (this.testId) {
            this.idTest = this.testId
        } else {
            this.idTest = parseInt(useRoute().params.idTest)
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
                current_page: this.currentPage
            };
            try {
                const responseQuestions = await getQuestionTestUpdate(this.idTest, paramsQuestion);
                // console.log(responseQuestions)
                if (responseQuestions) {
                    this.questions = responseQuestions.data?.questions
                    let pages = responseQuestions.data?.pages
                    this.startIndex = pages.startIndex
                    this.totalPage = pages.totalPage
                }
                var paramsNumerical = {
                    current_page: this.currentPage,
                    type: 1
                    // 1: Do 2: Update 3: History
                };
                const responseNumerical = await getNumericalQuestion(this.idTest, paramsNumerical)
                if (responseNumerical) {
                    this.numericalQuestion = responseNumerical
                }
            } finally {
                this.isLoading = false
            }
        },

        choiceAnswer(id) {
            var answer = document.getElementById("question_" + id);
            answer.classList.add("answer-content-choice");
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
        },
        save() {
            let sendData = { 'exam_id': 2, 'answers': new Set() }
            this.questions.forEach(question => {
                let q = this.$refs['question_' + question.question.question_id]
                if (q[0].answer != -1) {
                    let answer = { 'question_id': question.question.question_id, 'answer': q[0].answer }
                    sendData.answers.add(answer)
                }

            });
            console.log(Array.from(sendData.answers))
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

.pagination {
    display: flex;
    justify-content: center;
}

@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>