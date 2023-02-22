<template  v-if="render">
    <!-- <NavbarListComponent /> -->

    <NavbarListComponent :numericalQuestion="numericalQuestion" @moveQuestion="moveQuestion" />

    <div class="info-list-question">
        <div class="mark-header">
            <h1>Chấm bài thi</h1>
            <h3>Điểm 9</h3>
            <div class="mark-type-question">
                <h3>Câu hỏi</h3>
                <div class="menu-create">
                    <button class="create-button-type" @click="createQuestion(2)">
                        Trắc nghiệm
                    </button>
                    <button class="create-button-type" @click="createQuestion(1)">
                        Điền đáp án
                    </button>
                    <button class="create-button-type" @click="createQuestion(3)">
                        Tự luận
                    </button>
                </div>
            </div>
        </div>

        <LoadingComponent v-if="isLoading"></LoadingComponent>
        <template v-else>
            <div class="page">
                <h2>
                    Trang {{ currentPage }}
                </h2>
            </div>
            <div v-for="(question, index) in  questions" :key="index">
                <MarkQuestionComponent :question="question" :index="startIndex + index"
                    :ref="'question_' + question.question.question_id" :id="'question_' + question.question.question_id"
                    @mark="markPoint" />
            </div>
            <div class="end-action">
                <button class="update-create-question-button" @click="save">
                    Lưu trang
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
import Paginate from 'vuejs-paginate-next';
import { getExamHistory } from '../../services/exam'
import { getNumericalQuestion } from '../../services/test'
import { saveMark } from '../../services/exam'
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router';
import LoadingComponent from '../common/LoadingComponent.vue';
import NavbarListComponent from "../Test/NavbarListComponent.vue"
import MarkQuestionComponent from "./MarkQuestionComponent.vue"
export default {
    name: "MarkTestComponent",
    components: {
        paginate: Paginate,
        NavbarListComponent,
        LoadingComponent,
        MarkQuestionComponent
    },
    setup() {
        const idTest = parseInt(useRoute().params.idTest)
        const idExam = parseInt(useRoute().params.idExam)
        const isLoading = ref(false)
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
            mark: new Map()
        })
        // const answersUpdate = ref([])
        // const answersDelete = ref([])
        // const answersCreate = ref([])
        return {
            idTest,
            idExam,
            isLoading,
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
                this.sendData = new Set()
        },
        async handleGetData() {

            var paramsQuestion = {
                idExam: this.idExam,
                current_page: this.currentPage
            };
            try {
                const responseQuestions = await getExamHistory(this.idTest, paramsQuestion);
                // console.log(responseQuestions)
                if (responseQuestions) {
                    this.questions = responseQuestions.data?.questions
                    this.answersData = responseQuestions.data?.answers
                    this.idExam = responseQuestions.data?.exam_id
                    this.isOwner = responseQuestions.data?.isOwner
                    console.log(responseQuestions.data?.pages)
                    let pages = responseQuestions.data?.pages
                    this.startIndex = pages.startIndex
                    this.totalPage = pages.totalPage
                }
                var paramsNumerical = {
                    current_page: this.currentPage,
                    exam_id: this.idExam,
                    type: 4
                    // 1: Do 2: Update 3: History 4 Mark
                };
                const responseNumerical = await getNumericalQuestion(this.idTest, paramsNumerical)
                if (responseNumerical) {
                    this.numericalQuestion = responseNumerical.data
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
        markPoint(data) {
            // data.exam_id = this.idExam
            this.sendData.mark.set(data.question_id, data)
        },
        async save() {
            console.log(Array.from(this.sendData.mark.values()))
            let data = {
                current_page: this.currentPage,
                mark: Array.from(this.sendData.mark.values())
            }
            await saveMark(this.idExam, data)
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

.mark-type-question {
    display: flex;
    justify-content: flex-end;
    margin-left: 15px;
}

.menu-create {
    display: flex;
    align-items: center;
}

.create-button-type {
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

.blue {
    background-color: blue;
}

.green {
    background-color: green;
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
    width: 78%;
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