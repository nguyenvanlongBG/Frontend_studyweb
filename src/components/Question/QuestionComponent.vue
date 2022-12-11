<template>
    <div class="info-question" v-if="render">

        <div class="action-question">
            <button class="tool-button-test" :style="pressUpdate ? styleObject : null" @click="updateQuestion"
                v-if="canUpdate">
                Sửa
            </button>
            <button class="tool-button-test" @click="deleteQuestion" v-if="canUpdate">
                Xóa
            </button>
        </div>
        <h3 v-if="!isNormal">Câu : {{ parseInt(index) + 1 }}</h3>
        <LatexComponent @updateField="updateQuestion" :content="infoQuestion.question.content" :isUpdate="pressUpdate"
            @update="updateQuestion" />
        <!-- <CommentQuestionComponent :answers="question.answers" /> -->
        <h3>Đáp án của bạn là:</h3>
        <span v-if="canUpdate">Bạn hãy nhập đáp án của câu hỏi</span>
        <ChooseComponent :choices="infoQuestion.choices" :isUpdate="pressUpdate" @update="updateChoose"
            @createChoose="createChoose" v-if="(infoQuestion.question.type == 2)" />
        <LatexComponent :isUpdate="pressUpdate" v-if="(infoQuestion.question.type == 1)"
            @update="data => updateResultEssay(infoQuestion.question.result_id, data)" />
        <div class="action-question" v-if="pressUpdate">
            <button class="tool-button-test" @click="back">
                Trở lại
            </button>
            <button class="tool-button-test margin-bottom6px" @click="confirmUpdate">
                OK
            </button>
        </div>
        <ConfirmComponent v-if="confirmModal" content="Bạn có chắc chắn muốn xóa?" @close="confirmModal = false"
            @confirm="confirmDelete" />
    </div>

</template>
<script>
import ChooseComponent from "./ChooseComponent.vue";
import LatexComponent from "../LatexComponent.vue";
import ConfirmComponent from '../common/ConfirmComponent.vue'
import { ref } from "vue";
export default {
    name: "QuestionComponent",
    components: {
        ChooseComponent,
        LatexComponent,
        ConfirmComponent
    },
    props: ['question', 'canUpdate', 'index', 'isNormal'],
    setup() {
        const render = ref(true)
        const confirmModal = ref(false)
        const infoQuestion = ref([])
        const pressUpdate = ref(false)
        const styleObject = ref({
            "box-shadow": "0 5px #666",
            "transform": "translateY(4px)"
        })
        return {
            render, confirmModal, pressUpdate, styleObject, infoQuestion
        }
    },
    created() {
        this.infoQuestion = this.question
    },
    methods: {
        back() {
            this.pressUpdate = false
            this.render = false
            this.$nextTick(() => {
                this.render = true
            })
        },

        updateQuestion($content) {
            this.pressUpdate = true;
            this.$emit("update", { 'id': this.question.question.question_id, 'content': $content });
        },
        updateResultEssay($idAnswerEssay, $data) {
            // this.infoQuestion.
            console.log($idAnswerEssay)
            console.log($data)
        },
        updateChoose($index, $data) {
            console.log($index)
            console.log($data)
            // console.log("Before " + this.infoQuestion.choices[$index])
            // this.infoQuestion.choices[$index] = $data
            // console.log("After " + this.infoQuestion.choices[$index])
        },
        createChoose($data) {
            this.infoQuestion.choices.append($data)
        },
        deleteQuestion() {
            this.pressUpdate = false;
            this.confirmModal = true;
        },
        confirmDelete() {
            const idQuestion = this.question.question.id
            const deleteQuestion = {
                'id': idQuestion,
                'index': this.index
            }
            this.$emit("delete", deleteQuestion);
            this.confirmModal = false;

        },
        confirmUpdate() {

        }
    }
}
</script>
<style>
.info-question {
    background-color: #222;
    color: white;
    margin-top: 15px;
    padding: 15px;
    border-style: solid;
    border-color: #ea4f4c;
    /* padding: px; */
}

.tool-button-test {
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

.tool-button-test:active {

    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.margin-bottom6px {
    margin-bottom: 6px;
}
</style>