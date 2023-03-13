<template  v-if="render">
    <!-- <NavbarListComponent /> -->
    <NavbarListComponent :numericalQuestion="numericalQuestion" @moveQuestion="moveQuestion" />
    <QuestionBankComponent v-if="isDisplayBank" @close="closeBank" />
    <div class="info-list-question">
        <h1>Chỉnh sửa đề thi</h1>
        <LoadingComponent v-if="isLoading"></LoadingComponent>
        <template v-else>
            <div class="page">
                <h2>
                    Trang {{ currentPage }}
                </h2>
                <div class="menu-create">
                    <div class="choice-type-create" v-if="displayTypeCreateFirst">
                        <div class="create-button-type" @click="createQuestion(2)" v-if="canUpdate">
                            Trắc nghiệm
                        </div>
                        <div class="create-button-type" @click="createQuestion(1)" v-if="canUpdate">
                            Điền đáp án
                        </div>
                        <div class="create-button-type" @click="createQuestion(3)" v-if="canUpdate">
                            Tự luận
                        </div>
                    </div>
                    <button class="create-button-first" @click="displayCreateQuestionTypeFirst" v-if="canUpdate">
                        Tạo câu hỏi
                    </button>
                    <button class="create-button-first" @click="displayBank" v-if="canUpdate">
                        + Ngân hàng
                    </button>
                    <button class="create-button-first" @click="displayCreateQuestionTypeFirst" v-if="canUpdate">
                        Import
                    </button>
                </div>
            </div>
            <QuestionComponent v-for="(question, index) in  questions" :key="index" :question="question"
                :ref="'question_' + question.question.question_id" @create="createQuestion" @update="updateQuestion()"
                @delete="deleteQuestion" @addlistQuestionFollow="addlistQuestionFollow"
                :id="'question_' + question.question.question_id" :index="startIndex + index" :type="2" :isOwner="isOwner"
                @seeSolution="seeSolution" :listItemsSubject="listItemsSubject" />
            <div class="end-action">
                <div class="menu-create-end">
                    <div class="choice-type-create" v-if="displayTypeCreateEnd">
                        <div class="create-button-type" @click="createQuestion(2)" v-if="canUpdate">
                            Trắc nghiệm
                        </div>
                        <div class="create-button-type" @click="createQuestion(1)" v-if="canUpdate">
                            Điền đáp án
                        </div>
                        <div class="create-button-type" @click="createQuestion(3)" v-if="canUpdate">
                            Tự luận
                        </div>
                    </div>
                    <button class="update-create-question-button" @click="displayCreateQuestionTypeEnd" v-if="canUpdate">
                        Thêm câu hỏi
                    </button>
                </div>

                <button class="update-create-question-button" @click="addPage" v-if="canUpdate && currentPage == totalPage">
                    Thêm trang
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
import { getTest, getNumericalQuestion, updateTest } from '../../services/test'
import { getItems } from '../../services/subject'
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router';
import LoadingComponent from '../common/LoadingComponent.vue';
import NavbarListComponent from "../Test/NavbarListComponent.vue"
import QuestionBankComponent from "../Test/QuestionBankComponent.vue"
export default {
    name: "UpdateTestComponent",
    components: {
        QuestionComponent,
        paginate: Paginate,
        NavbarListComponent,
        QuestionBankComponent,
        LoadingComponent,
    },
    props: ['testId'],
    setup() {
        const idTest = null
        const isLoading = ref(false)
        const canUpdate = ref(true)
        const questions = ref([])
        const currentPage = ref(1)
        const totalPage = ref(1)
        const startIndex = ref(1)
        const numericalQuestion = ref([])
        const moveTo = ref("")
        const listQuestionFollow = ref(new Set())
        const questionsDelete = ref([])
        const render = ref(true)
        const indexNewQuestion = ref(0)
        const displayTypeCreateFirst = ref(false)
        const displayTypeCreateEnd = ref(false)
        const displaySolution = ref(false)
        const isOwner = ref(false)
        const test = ref(null)
        const isDisplayBank = ref(false)
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
        const listItemsSubject = ref([])
        return {
            idTest,
            test,
            isLoading,
            canUpdate,
            questions,
            currentPage,
            totalPage,
            startIndex,
            numericalQuestion,
            moveTo,
            listQuestionFollow,
            questionsDelete,
            sendData,
            indexNewQuestion,
            displayTypeCreateFirst,
            displayTypeCreateEnd,
            displaySolution,
            isOwner,
            listItemsSubject,
            isDisplayBank,
            render
        }
    },
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
        this.getItems()
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
                if (responseQuestions) {
                    this.questions = responseQuestions.data?.questions
                    this.itemsSubject = responseQuestions.data?.itemsSubject
                    this.isOwner = responseQuestions.data?.isOwner
                    let pages = responseQuestions.data?.pages
                    this.startIndex = pages.startIndex
                    this.currentPage = pages.currentPage
                    this.totalPage = pages.totalPage
                }
                var paramsNumerical = {
                    current_page: this.currentPage,
                    type: 2
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
        async getItems() {
            const response = await getTest(this.idTest)
            this.test = response.data
            const responseItems = await getItems(this.test.subject_id)
            this.listItemsSubject = responseItems.data
            console.log("List items")
            console.log(this.listItemsSubject)
        },
        addlistQuestionFollow(id) {
            // Add id question to list question update
            console.log(id)
            this.listQuestionFollow.add(id);
        },
        choiceAnswer(id) {
            var answer = document.getElementById("question_" + id);
            answer.classList.add("answer-content-choice");
        },
        clickCallback(pageNum) {
            console.log(pageNum)
            this.currentPage = pageNum
            this.handleGetData()
        },
        async addPage() {
            this.totalPage += 1
            let data = {
                'id': this.idTest,
                'total_page': this.totalPage
            }
            try {
                await updateTest(data);
                this.clickCallback(parseInt(this.currentPage) + 1)
            } catch (error) {
                console.log(error)
            } finally {
                this.refreshData()
            }

        },
        Next(pageNum) {
            this.currentPage = pageNum
            this.handleGetData()
        },
        Prev(pageNum) {

            this.currentPage = pageNum
            this.handleGetData()
        },
        displayBank() {
            this.isDisplayBank = true
        },
        closeBank() {
            this.isDisplayBank = false
        },
        displayCreateQuestionTypeFirst() {
            this.displayTypeCreateFirst = !this.displayTypeCreateFirst
        },
        displayCreateQuestionTypeEnd() {
            this.displayTypeCreateEnd = !this.displayTypeCreateEnd
        },
        createQuestion(type) {
            let newQuestion = {
            }
            newQuestion.question = { 'question_id': 'new_' + this.indexNewQuestion, 'page': this.currentPage, "type": type, 'index': this.questions.length, 'result_id': "", 'contentResult': "", 'scope': 1, 'dependence_id': this.idTest }
            if (type == 1 || type == 3) {
                newQuestion.question.result_id = "new"
            }
            this.indexNewQuestion++
            newQuestion.choices = []
            this.questions.push(newQuestion)
            let item = { 'id': newQuestion.question.question_id, 'page': this.currentPage, 'index': this.questions.length, 'type': 0 }
            this.numericalQuestion.data.splice(this.startIndex + this.questions.length - 2, 0, item);
            setTimeout(() => {
                let question = document.getElementById('question_' + newQuestion.question.question_id);
                this.displayTypeCreateFirst = false
                this.displayTypeCreateEnd = false
                question.scrollIntoView();
            }, 500)
        },

        deleteQuestion(deleteQuestion) {

            // this.questions
            this.render = false
            this.questions.splice(deleteQuestion.index - this.startIndex, 1)
            this.numericalQuestion.data.splice(deleteQuestion.index, 1)
            // console.log("Delete " + ('' + deleteQuestion.id).includes('new_'))
            let q = this.$refs['question_' + deleteQuestion.id][0]
            if (deleteQuestion.result != undefined) {
                this.sendData.deleteResults.push(deleteQuestion.result)
            }
            if (('' + deleteQuestion.id).includes('new_')) {
                if (this.questionsCreate.get(deleteQuestion.id) !== undefined) {
                    this.questionsCreate.delete(deleteQuestion.id)
                }
            } else {

                this.sendData.choices.delete = [...Array.from(q.chooseDelete)]
                this.questionsDelete.push(deleteQuestion.id)
            }
            this.$nextTick(() => {
                this.render = true
            })
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
<style scoped>
.page {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
}

.menu-create {
    display: flex;
    align-items: center;
}

.menu-create-end {
    display: flex;
}

.pagination {
    display: flex;
    justify-content: center;
}

.margin-bottom10px {
    margin-bottom: 10px;
}

.choice-type-create {
    display: flex;
    flex-direction: column;
    cursor: pointer;
}

.create-button-type {
    margin-left: 2px;
    margin-top: 2px;
    padding: 2px 4px;
    height: 35px;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;
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

.create-button-first:active {
    box-shadow: 0 2px #666;
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

.update-create-question-button:active {
    box-shadow: 0 2px #666;
    transform: translateY(4px);
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

@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>