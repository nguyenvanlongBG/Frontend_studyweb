<template>
    <div class="modal-bank-overlay">
        <div class="container-bank-question">
            <div class="close-button">
                <button @click="close()" class="close-modal-solution">X</button>
            </div>
            <div class="container-list-question">
                <div class="header-list-exams">
                    <h1>
                        Danh sách câu hỏi
                    </h1>
                </div>
                <QuestionComponent v-for="(question, index) in  questions" :key="index" :question="question"
                    :ref="'question_' + question.question.question_id" @create="createQuestion" @update="updateQuestion()"
                    @delete="deleteQuestion" @addlistQuestionFollow="addlistQuestionFollow"
                    :id="'question_' + question.question.question_id" :index="startIndex + index" :type="2"
                    :isOwner="isOwner" @seeSolution="seeSolution" :listItemsSubject="listItemsSubject" />
            </div>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
// import VueMultiselect from 'vue-multiselect'
import QuestionComponent from '../Question/QuestionComponent.vue';
export default {
    name: "ModalAddQuestionBank",
    components: {
        // VueMultiselect,
        QuestionComponent
    },
    setup() {
        const displayAdd = ref(false)
        const solution = ref({})
        const render = ref(true)
        return {
            displayAdd, solution, render
        }
    },
    watch: {
        selectAll() {
            this.displayAdd = !this.displayAdd
            if (this.selectAll[0]) {
                this.questions.forEach(question => {
                    this.selectQuestions.add(question.question.question_id)
                });
                console.log(this.selectQuestions)
            } else {
                this.selectQuestions = new Set()
            }
        },
        selectQuestions() {
            if (this.selectQuestions.size != 0) {
                this.displayAdd = true
            } else {
                this.displayAdd = false
            }
            console.log("Question Select")
            console.log(this.selectQuestions)
        }
    },
    computed: {

    },
    data() {
        return {
            selectAll: [],
            selectQuestions: new Set(),
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
.modal-bank-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    background-color: #2b2929da;
    z-index: 100;
}

.container-bank-question {
    margin: 0 10%;
    background-color: rgba(240, 248, 255, 0.495);
}

.container-list-question {
    padding-left: 35px;
    padding-right: 35px;
    width: 100%;
    overflow-y: hidden scroll;
}





.close-button {
    display: flex;
    justify-content: flex-end;
}

.close-modal-solution {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    cursor: pointer;
    background-color: rgb(248, 74, 5);
}
</style>