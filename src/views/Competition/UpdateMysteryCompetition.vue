<template>
    <div>
        <div>
            <BigQuestionComponent @open="openQuestion" />
        </div>
    </div>
</template>
<script>
import BigQuestionComponent from "./BigQuestionComponent.vue";
import QuestionComponent from "../Question/QuestionComponent.vue";
import { ref } from "vue";
export default {
    name: "UpdateMysteryCompetition",
    components: {
        BigQuestionComponent,
        QuestionComponent,
    },
    setup() {
        const displayChat = ref(false)
        return {
            displayChat
        }

    },
    data() {
        return {
            doFinal: false,
            questions: [{
                question: {
                    question_id: 1,
                    type: 4,
                    content: 'OK'
                },
                page: 1
            }, {
                question: {
                    question_id: 1,
                    type: 3,
                    content: 'OK'
                },
                page: 1
            }]
        }
    },
    methods: {
        openChat() {
            this.displayChat = !this.displayChat
        },
        finalChallenge() {
            this.doFinal = true
        }
    }
}
</script>
<style scoped>
.container-participate-competition {
    margin-left: 15%;
    /* margin-right: 15%; */
    width: 85%;
    margin-top: 5px;
    display: flex;
}

.action-button-move {
    margin-left: 12px;
    margin-top: 2px;
    margin-right: 12px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    cursor: pointer;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.action-button-move:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.navigation-question {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 55px;
    background-color: #222;
}
</style>