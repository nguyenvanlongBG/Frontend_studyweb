<template>
    <!-- <NavbarListComponent /> -->
    <div class="info-list-question">
        <button class="update-create-question-button" @click="createQuestion" v-if=canUpdate>
            Thêm câu hỏi
        </button>

        <QuestionComponent v-for="question in  questions" :key="question.id" :question="question"
            @update="updateQuestion()" @delete="deleteQuestion()" :canUpdate=canUpdate />

        <paginate :page-count="pages" :page-range="3" :margin-pages="2" :click-handler="clickCallback"
            :prev-text="'Prev'" :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'"
            :active-class="'active-class'">
        </paginate>
    </div>

</template>
<script>
import QuestionComponent from '../Question/QuestionComponent.vue';
import Paginate from 'vuejs-paginate-next';
import { getQuestionTest } from '../../services/questionTest'
import { ref } from '@vue/reactivity'
import { useRoute } from 'vue-router';

export default {
    name: "DoTestComponent",
    components: {
        QuestionComponent,
        paginate: Paginate,
    },
    setup() {
        const idTest = useRoute().params.idTest
        const isLoading = ref(false)
        const canUpdate = ref(false)
        const questions = ref([])
        const page = ref(1)
        const pages = ref(1)
        const listQuestionUpdate = ref([])
        const listQuestionDelete = ref([])
        return {
            idTest,
            isLoading,
            canUpdate,
            questions,
            page,
            pages,
            listQuestionUpdate,
            listQuestionDelete
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
        async handleGetData() {
            console.log(this.questions)
            console.log(this.idTest)
            var params = {
                page: this.page
            };
            try {
                const responseQuestions = await getQuestionTest(this.idTest, params);
                if (responseQuestions) {
                    this.questions = responseQuestions.data.questions;
                    this.pages = responseQuestions.data.pages.totalPages
                }
            } finally {
                this.isLoading = false
            }
        },

        choiceAnswer($id) {
            var answer = document.getElementById("question_" + $id);
            answer.classList.add("answer-content-choice");
        },
        clickCallback(pageNum) {
            this.page = pageNum
            console.log(this.page)
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
        createQuestion() {
            this.modalCreateQuestion.visible = true;
        },
        updateQuestion() {

        },
        deleteQuestion() {
            this.listQuestionDelete.push();
        }
    }
}
</script>
<style>
.margin-bottom10px {
    margin-bottom: 10px;
}

.update-create-question-button {
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

@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>