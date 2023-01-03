<template>
    <!-- <ModalCreateQuestion v-if="modalCreateQuestion.visible" @close="modalCreateQuestion.visible = false">

    </ModalCreateQuestion> -->
    <div class="exam">

        <!-- <DoTestComponent /> -->
        <RouterView></RouterView>
        <!-- <QuestionComponent v-for="question in questions" :key="question.question_id" :question="question" /> -->
    </div>
</template>
<script>
// import { useRoute } from 'vue-router';
// import { getQuestionTest } from '../../services/questionTest'

// import ModalCreateQuestion from "../ModalCreateQuestion.vue"

// import DoTestComponent from './DoTestComponent.vue';
// import QuestionComponent from '../Question/QuestionComponent.vue';

// import { answerTest } from '../services/answerTest'
export default {
    name: "TestDetailComponent",
    components: {
        // ModalCreateQuestion,
        // NavbarListComponent,
        // DoTestComponent,
        // QuestionComponent
    },
    data() {


        return {
            infoTest: {},
            questions: [],
            modalCreateQuestion: {
                visible: false,
            },
            hasRole: false,
            formula: 'Giải phương trình $$x = {-b \\pm \\sqrt{b^2-4ac} \\over 2a}.$$',
        }
    },
    mounted() {
        this.getData();
    },
    methods: {
        async getData() {


        },
        choiceAnswer($id) {
            var answer = document.getElementById("question_" + $id);
            answer.classList.add("answer-content-choice");
        },
        createQuestion() {
            this.modalCreateQuestion.visible = true;
        },
    },
}
</script>
<style>
.exam {
    display: flex;
}







.nameUser {
    font-weight: bold;
}











/* 
.answer-content-choice {
    background-color: #222;
    border-color: #222;
    color: white;
} */

.tool-button-test {
    margin-left: 2px;
    margin-top: 2px;
    height: 35px;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;

}

.action-question {
    margin-top: 2px;
    display: flex;
    justify-content: flex-end;
}
</style>