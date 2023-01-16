<template>
    <div :class="styleQuestion" v-if="render">
        <div class="action-question">
            <button class="tool-button-test" :style="pressUpdate ? styleObject : null" @click="publicQuestion"
                v-if="canUpdate">
                Diễn đàn
            </button>
            <button class="tool-button-test" :style="pressUpdate ? styleObject : null" @click="updateQuestion"
                v-if="canUpdate">
                Sửa
            </button>
            <button class="tool-button-test" @click="deleteQuestion" v-if="canUpdate">
                Xóa
            </button>
        </div>
        <h3 v-if="type != 0">Câu {{ index }}: </h3>
        <h3 v-if="type == 0">Câu hỏi: </h3>
        <LatexComponent :content="infoQuestion.question.content" :isUpdate="pressUpdate" @update="updateContentQuestion"
            :id="'question_' + infoQuestion.question.question_id" />
        <!-- <CommentQuestionComponent :answers="question.answers" /> -->
        <h3 v-if="(infoQuestion.question.type == 1 || infoQuestion.question.type == 3) && (type == 3 || type == 2)">Đáp
            án đúng:</h3>
        <LatexComponent :isUpdate="canEssay" @update="answerQuestion"
            :content="infoQuestion.question.contentResult != null ? infoQuestion.question.contentResult : ''"
            :id="infoQuestion.question.question_id + '_result_' + infoQuestion.question.result_id"
            v-if="(infoQuestion.question.type == 1 || infoQuestion.question.type == 3) && (type == 3 || type == 2)"
            class="border-green" />
        <h3 v-if="type != 2 && type != 0">Đáp án của bạn là:</h3>
        <span v-if="canUpdate && type != 2 && type != 0">Bạn hãy nhập đáp án của câu hỏi</span>
        <LatexComponent :isUpdate="canEssay" @update="answerQuestion"
            :content="infoQuestion.question.answer != null ? infoQuestion.question.answer : ''"
            :id="infoQuestion.question.question_id + '_answer'"
            v-if="(infoQuestion.question.type == 1 || infoQuestion.question.type == 3) && (type == 1 || type == 3)" />
        <ChooseComponent :ref="'chooses_' + infoQuestion.question.question_id" :choices="infoQuestion.choices"
            :isUpdate="pressUpdate" doTest="true" @update="updateChoose" @create="createChoose" @delete="deleteAnswer"
            @chooseAnswer="answerQuestion" v-if="(infoQuestion.question.type == 2)" :type="type"
            :linkNavbar="'page_' + infoQuestion.question.page + '_' + index"
            :question="infoQuestion.question.question_id" :canChoose="canChoose" />
        <!-- <LatexComponent v-if="(infoQuestion.question.type == 1)" :isUpdate="isUpdateEssay"
            @update="data => updateResultEssay(infoQuestion.question.result_id, data)" /> -->

        <div class="action-question" v-if="pressUpdate">
            <button class="tool-button-test" @click="back">
                Trở lại
            </button>
            <button class="tool-button-test margin-bottom6px" @click="confirmUpdate">
                Lưu
            </button>
        </div>
        <ConfirmComponent v-if="confirmModal" content="Bạn có chắc chắn muốn xóa?" @close="confirmModal = false"
            @confirm="confirmDelete" />
        <CommentQuestionComponent v-if="this.infoQuestion.question.scope == 0" />

    </div>

</template>
<script>
import ChooseComponent from "./ChooseComponent.vue";
import CommentQuestionComponent from "./CommentQuestionComponent.vue";
import LatexComponent from "../LatexComponent.vue";
import ConfirmComponent from '../common/ConfirmComponent.vue'
import { ref } from '@vue/reactivity'
import { handleQuestionTest } from '../../services/question'
export default {
    name: "QuestionComponent",
    components: {
        ChooseComponent,
        LatexComponent,
        ConfirmComponent,
        CommentQuestionComponent,
    },
    props: ['question', 'isUpdateEssay', 'index', 'isNormal', 'type', 'send'],
    setup() {
        const render = ref(true)
        const confirmModal = ref(false)
        const infoQuestion = ref([])
        const pressUpdate = ref(false)
        const canEssay = ref(false)
        const canUpdate = ref(false)
        const handleQuestion = ref({ 'question': {}, 'answer': {} })
        const writeResult = ref({})
        const result = ref(-1)
        const essayAnswer = ref({})
        const answerUpdate = ref(new Map())
        const answerDelete = ref(new Set())
        const answerCreate = ref(new Map())
        const page = ref(1)
        const canChoose = ref(false)
        const answer = ref(-1)
        const styleObject = ref({
            "box-shadow": "0 5px #666",
            "transform": "translateY(4px)"
        })
        const styleQuestion = ref("info-question")
        return {
            render, result, writeResult, handleQuestion, essayAnswer, answerUpdate, answerDelete, answerCreate, styleQuestion, confirmModal, pressUpdate, page, styleObject, infoQuestion, canEssay, canUpdate, canChoose, answer
        }
    },

    created() {
        // Câu hỏi thường
        if (this.type == 0) {
            this.canEssay = this.isUpdateEssay;
            this.canChoose = false;

        }
        // Câu hỏi thi
        if (this.type == 1) {
            this.canUpdate = false
            this.canEssay = true
            this.canChoose = true;
        }
        // Câu hỏi cập nhật
        if (this.type == 2) {
            this.canUpdate = true
            this.canEssay = true
            this.canChoose = true;
        }
        // Câu hỏi lịch sử làm bài
        if (this.type == 3) {
            this.canEssay = false
            this.canChoose = false
        }

        this.canEssay = this.isUpdateEssay
        this.infoQuestion = JSON.parse(JSON.stringify(this.question));
        // if (("" + this.infoQuestion.question.question_id).includes("new") && this.infoQuestion.question.type != 2) {
        //     this.answerCreate.set(this.infoQuestion.question.question_id + "new_answer", { 'id': this.infoQuestion.question.question_id + "new_answer", 'content': "" });
        // }
        this.handleQuestion.question = this.question.question
        this.page = this.question.page
    },
    mounted() {

        if (this.type == 1) {
            if (this.question.question.type == 2) {
                if (this.question.question?.answer != null) {
                    let choose = document.getElementById(this.question.question.question_id + '_choose_' + this.question.question.answer)
                    choose.click()
                }
            }
        }

        if (this.type == 2) {
            if (this.question.question.type == 2) {
                if (this.question.question?.result_id != null) {
                    let choose = document.getElementById(this.question.question.question_id + '_choose_' + this.question.question.result_id)
                    choose.click()
                }
            }
        }

        if (this.type == 3) {
            if (this.question.question?.result_id != null) {
                if (this.question.question.type == 2) {
                    if (this.question.question.answer != null) {
                        console.log("OK")
                        if (this.question.question.result_id == this.question.question.answer) {
                            let choose = document.getElementById(this.question.question.question_id + '_choose_' + this.infoQuestion.question.answer)
                            choose.style.border = "4px solid rgb(16, 249, 4)"
                            let question = document.getElementById("question_" + this.question.question.question_id)
                            question.style.border = "4px solid rgb(16, 249, 4)"
                        } else {
                            let chooseCorrect = document.getElementById(this.question.question.question_id + '_choose_' + this.infoQuestion.question.result_id)
                            chooseCorrect.style.border = "4px solid rgb(16, 249, 4)"
                            let chooseFalse = document.getElementById(this.question.question.question_id + '_choose_' + this.infoQuestion.question.answer)
                            chooseFalse.style.border = "4px solid red"

                            let question = document.getElementById("question_" + this.question.question.question_id)
                            question.style.border = "4px solid red"
                        }
                    } else {
                        let chooseCorrect = document.getElementById(this.question.question.question_id + '_choose_' + this.infoQuestion.question.result_id)
                        chooseCorrect.style.border = "4px solid rgb(16, 249, 4)"
                    }
                }
                if (this.question.question.type == 1) {
                    if (this.question.question.contentResult == this.question.question.answer) {
                        let chooseCorrect = document.getElementById(this.question.question.question_id + '_result_' + this.infoQuestion.question.result_id)
                        chooseCorrect.style.border = "4px solid rgb(16, 249, 4)"
                        let chooseAnswer = document.getElementById(this.question.question.question_id + '_answer')
                        chooseAnswer.style.border = "4px solid rgb(16, 249, 4)"
                    } else {
                        let chooseCorrect = document.getElementById(this.question.question.question_id + '_result_' + this.infoQuestion.question.result_id)
                        chooseCorrect.style.border = "4px solid rgb(16, 249, 4)"
                        let chooseFalse = document.getElementById(this.question.question.question_id + '_answer')
                        chooseFalse.style.border = "4px solid red"
                    }

                }
            }
        }
    },
    methods: {

        back() {
            this.pressUpdate = false
            this.canEssay = false
            this.render = false
            this.canChoose = false
            this.handleQuestion = ref({})
            this.writeResult = ref({})
            this.essayAnswer = ref({})
            this.answerUpdate = ref(new Map())
            this.answerDelete = ref(new Set())
            this.answerCreate = ref(new Map())
            this.answer = ref(-1)
            this.$nextTick(() => {
                this.render = true
            })
        },
        answerQuestion(answer) {
            this.answer = answer
        },
        publicQuestion() {

        },
        updateQuestion() {
            this.pressUpdate = true;
            this.canEssay = true;
            this.canChoose = true
        },
        updateContentQuestion(data) {
            // this.questionUpdate.id = this.infoQuestion.question.question_id
            this.handleQuestion.question.content = data
            // this.questionUpdate.id = this.infoQuestion.question.question_id
        },
        updateChoose(choose) {
            if (('' + choose.id).includes('new')) {
                choose.question_id = this.infoQuestion.question.question_id
                this.answerCreate.set(choose.id, choose)
            } else {
                choose.question_id = this.infoQuestion.question.question_id
                this.answerUpdate.set(choose.id, choose)
            }
        },

        createChoose(data) {
            data.question_id = this.infoQuestion.question.question_id
            this.answerCreate.set(data.id, data)
        },
        deleteAnswer(id) {
            if (this.infoQuestion.question.type == 2) {
                if (id == this.infoQuestion.question.result_id || this.infoQuestion.question.result_id == null) {
                    this.answer = null
                }
            }
            if (('' + id).includes('new')) {
                // Xóa câu hỏi trắc nghiệm mới tạo
                this.answerCreate.delete(id)
            } else {
                if (this.answerUpdate.get(id) != undefined) {
                    this.answerUpdate.delete(id)
                }
                this.answerDelete.add(id)
            }

        },
        deleteQuestion() {
            this.pressUpdate = false;
            this.confirmModal = true;
        },
        confirmDelete() {
            const idQuestion = this.question.question.question_id
            const deleteQuestion = {
                'id': idQuestion,
                'index': this.index,
            }
            if (this.infoQuestion.question.type == 2) {
                this.infoQuestion.choices.forEach(choose => {
                    this.deleteAnswer(choose.id)
                });
            } else {
                this.deleteAnswer(this.infoQuestion.question.result_id)

            }
            this.$emit("delete", deleteQuestion);
            this.confirmModal = false;
        },
        async confirmUpdate() {
            this.pressUpdate = false
            this.canEssay = false
            this.canChoose = false
            if (this.infoQuestion.question.type == 2) {
                this.handleQuestion.question.result_id = this.answer
            } else {
                this.handleQuestion.question.contentResult = this.answer
                if (Number.isInteger(this.infoQuestion.question.result_id)) {
                    let data = {
                        question_id: this.infoQuestion.question.question_id,
                        id: this.infoQuestion.question.result_id,
                        content: this.answer
                    }
                    this.answerUpdate.set(this.infoQuestion.question.result_id, data)
                } else {
                    let data = {
                        question_id: this.infoQuestion.question.question_id,
                        id: this.infoQuestion.question.result_id,
                        content: this.answer
                    }
                    this.answerCreate.set(this.infoQuestion.question.result_id, data)
                }
            }
            this.handleQuestion.answer.create = Array.from(this.answerCreate.values())
            this.handleQuestion.answer.update = Array.from(this.answerUpdate.values())
            console.log("Update choose")
            console.log(this.handleQuestion.answer.update)
            this.handleQuestion.answer.delete = Array.from(this.answerDelete.values())
            console.log("Send Data")
            console.log(this.handleQuestion)
            const response = await handleQuestionTest(this.handleQuestion)
            this.infoQuestion = response.data
            this.render = false
            this.$nextTick(() => {
                this.render = true
            })
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
    border-color: #666363;
}

.info-question-correct {
    background-color: #222;
    color: white;
    margin-top: 15px;
    padding: 15px;
    border-style: solid;
    border-color: #666363;
}

.info-question-false {
    background-color: #222;
    color: white;
    margin-top: 15px;
    padding: 15px;
    border-style: solid;
    border-color: #666363;
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

.border-green {
    border: 2px solid rgb(8, 196, 40);
}
</style>