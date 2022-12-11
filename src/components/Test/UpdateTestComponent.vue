<template>
    <!-- <NavbarListComponent /> -->
    <LoadingComponent :isLoading="isLoading"></LoadingComponent>
    <div class="info-list-question">

        <button class="update-create-question-button" @click="createQuestion" v-if="canUpdate">
            Thêm câu hỏi
        </button>

        <QuestionComponent v-for="(question, index) in  questions" :key="question.id" :isNormal="false"
            :question="question" :index="index" @update="updateQuestion()" @delete="deleteQuestion"
            :canUpdate=canUpdate />
        <button class="update-create-question-button" @click="createQuestion" v-if="canUpdate">
            Cập nhật
        </button>
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
import LoadingComponent from '../common/LoadingComponent.vue';
export default {
    name: "UpdateTestComponent",
    components: {
        QuestionComponent,
        paginate: Paginate,
        LoadingComponent
    },
    setup() {
        const idTest = useRoute().params.idTest
        const isLoading = ref(true)
        const canUpdate = ref(true)
        const questions = ref([])
        const page = ref(1)
        const pages = ref(1)
        const questionsUpdate = ref([])
        const questionsDelete = ref([])
        // const questionsCreate = ref([])
        // const answersUpdate = ref([])
        // const answersDelete = ref([])
        // const answersCreate = ref([])
        return {
            idTest,
            isLoading,
            canUpdate,
            questions,
            page,
            pages,
            questionsUpdate,
            questionsDelete
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
                    this.pages = responseQuestions.data.pages.total_page
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
        deleteQuestion(deleteQuestion) {
            console.log(this.questionsDelete)
            // this.questions
            this.questions.splice(deleteQuestion.index, 1)
            console.log(this.questions)
            this.questionsDelete.push(deleteQuestion.id)
            console.log(this.questionsDelete)

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

.info-list-question {
    width: 79%;
    margin-top: 3px;
    margin-right: 2px;
    position: absolute;
    right: 0;
}


@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>