<template>
    <div :class="styleQuestion" v-if="render">
        <div class="question-not-note">
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
            <div class="select-item-subject">
                <h3 v-if="type != 0 && type != 5">Câu {{ index }}: </h3>
                <div class="values-items-subject">
                    <VueMultiselect :disabled="!pressUpdate" v-model="subject" :options="subjectTest ? subjectTest : []"
                        :multiple="false" :close-on-select="false" :clear-on-select="false" select-label=''
                        placeholder="Chương" label="name" track-by="id" :preselect="selectedSubject" @select="selectItems"
                        @remove="removeItems" v-if="type == 2" deselect-label=''>
                    </VueMultiselect>
                    <VueMultiselect :disabled="!pressUpdate" v-model="infoQuestion.items"
                        :options="chaptersSubject && chaptersSubject[0] ? chaptersSubject[0] : []" :multiple="true"
                        :close-on-select="false" :clear-on-select="false" :preserve-search="true" placeholder="Chương"
                        label="name" track-by="name" :preselect-first="true" @select="selectItems" @remove="removeItems"
                        v-if="type == 2" select-label='' deselect-label=''>
                    </VueMultiselect>
                </div>
            </div>
            <h4 v-if="type == 0">Câu hỏi: </h4>
            <h4 v-if="type == 5">Câu hỏi: {{ typeQuestion[infoQuestion.question.type] }}</h4>
            <LatexComponent :content="infoQuestion.question.content" :isUpdate="pressUpdate" @update="updateContentQuestion"
                :id="'question_' + infoQuestion.question.question_id" />
            <!-- <CommentQuestionComponent :answers="question.answers" /> -->
            <slot name="contentBigQuestion"></slot>
            <h4 v-if="(infoQuestion.question.type == 3) && (type == 3 || type == 2)">
                Đáp
                án câu hỏi:</h4>
            <h4 v-if="(infoQuestion.question.type == 1) && (type == 3 || type == 2)">
                Các đáp án câu hỏi điền đáp án</h4>
            <FillAnswerComponent :isUpdate="canEssay" @update="updateFillAnswer" @create="createFillAnswer"
                @delete="deleteFillAnswer" :answers="infoQuestion.solutions" :question="infoQuestion.question.question_id"
                v-if="(infoQuestion.question.type == 1) && (type == 3 || type == 2)" />
            <div v-if="(type == 1 || type == 3 || type == 4 || type == 5)">
                <h4>Đáp án của bạn là:</h4>
                <span v-if="question.question.type == 2">Lựa chọn phương án đúng nhất</span>
                <span v-if="question.question.type == 1">Bạn hãy điền đáp án câu hỏi</span>
                <span v-if="question.question.type == 3">Bạn hãy điền lời giải</span>
                <span v-if="canUpdate && type != 2 && type != 0">Bạn hãy nhập đáp án của câu hỏi</span>
            </div>
            <LatexComponent :isUpdate="canEssay" @update="answerQuestion"
                :content="infoQuestion.history[0].answer != null ? infoQuestion.history[0].answer : ''"
                :id="infoQuestion.question.question_id + '_answer'"
                v-if="(infoQuestion.question.type == 1) && (type == 1 || type == 3 || type == 5)" />
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
            <div class="action-question" v-if="type == 4">
                <button class="tool-button-test margin-bottom6px" @click="submitAnswer">
                    Gửi
                </button>
            </div>
            <ConfirmComponent v-if="confirmModal" content="Bạn có chắc chắn muốn xóa?" @close="confirmModal = false"
                @confirm="confirmDelete" />
            <CommentQuestionComponent v-if="this.infoQuestion.question.scope == 0 && type != 4 && type != 1"
                :solutions="infoQuestion.solutions"
                :question="{ 'id': infoQuestion.question.question_id, 'content': infoQuestion.question.content }" />
        </div>
        <div class="note" v-if="type == 2 || type == 3 || type == 4">
            <div class="note-icon" @click="displayNote = !displayNote">
                <i class="fa-solid fa-circle-exclamation brand-color"></i>
            </div>
            <Transition name="slide-fade">
                <div class="note-teacher-student" v-if="displayNote">
                    <NoteComponent>
                        <template v-slot:note>
                            <div class="note-action">
                                <div class="note-content">
                                    <h4 class="title-note">Ghi chú giáo viên</h4>
                                    <LatexComponent :isUpdate="isOwner ? isOwner : false" @update="updateNoteQuestion" />
                                </div>
                                <div class="action-note">
                                    <button class="note-button" @click="back">
                                        Lưu
                                    </button>
                                </div>
                            </div>
                        </template>
                    </NoteComponent>
                    <NoteComponent>
                        <template v-slot:note>
                            <div class="note-action">
                                <div class="note-content">
                                    <h4 class="title-note">Ghi chú học sinh</h4>
                                    <LatexComponent :isUpdate="!isOwner" @update="noteStudent" />
                                </div>
                                <div class="action-note">
                                    <button class="note-button" @click="back">
                                        Lưu
                                    </button>
                                </div>
                                <div class="list-other-note">
                                    <div class="other-note">
                                        <LatexComponent :isUpdate="false" />
                                    </div>
                                    <div class="other-note">
                                        <LatexComponent :isUpdate="false" />
                                    </div>
                                    <div class="other-note">
                                        <LatexComponent :isUpdate="false" />
                                    </div>
                                </div>
                            </div>
                        </template>
                    </NoteComponent>

                </div>
            </Transition>
        </div>
    </div>
</template>
<script>
import ChooseComponent from "./ChooseComponent.vue";
import CommentQuestionComponent from "./CommentQuestionComponent.vue";
import LatexComponent from "../LatexComponent.vue";
import ConfirmComponent from '../common/ConfirmComponent.vue'
import { ref } from '@vue/reactivity'
import { handleQuestionTest } from '../../services/question'
import { Transition } from "vue";
import NoteComponent from "../common/NoteComponent.vue";
import VueMultiselect from 'vue-multiselect'
import FillAnswerComponent from "./FillAnswerComponent.vue";
import { SUBJECTSTEST } from '../../configs/subject'
export default {
    name: "QuestionComponent",
    components: {
        ChooseComponent,
        LatexComponent,
        ConfirmComponent,
        CommentQuestionComponent,
        Transition,
        NoteComponent,
        VueMultiselect,
        FillAnswerComponent
    },
    props: ['question', 'index', 'type', 'isOwner', 'chaptersSubject'],
    setup() {
        const render = ref(true)
        const confirmModal = ref(false)

        const pressUpdate = ref(false)
        const canEssay = ref(false)
        const canUpdate = ref(false)
        const handleQuestion = ref({ 'question': {}, 'answer': {}, 'solutions': { 'create': [], 'delete': [] }, 'items': { 'create': [], 'remove': [] } })
        const writeResult = ref({})
        const result = ref(-1)
        const essayAnswer = ref({})
        const answerUpdate = ref(new Map())
        const answerDelete = ref(new Set())
        const answerCreate = ref(new Map())
        const solutions = ref(new Set())
        const page = ref(1)
        const canChoose = ref(false)
        const answer = ref(-1)
        const displayNote = ref(false)
        const styleObject = ref({
            "box-shadow": "0 5px #666",
            "transform": "translateY(4px)"
        })
        const styleQuestion = ref("info-question")
        const typeQuestion = ['', 'Điền đáp án', ' Trắc nghiệm', ' Tự luận']
        return {
            render, result, writeResult, handleQuestion, essayAnswer, answerUpdate, answerDelete, answerCreate, solutions, styleQuestion, confirmModal, pressUpdate, page, styleObject, canEssay, canUpdate, canChoose, answer, displayNote, typeQuestion
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
            this.canEssay = false
            this.canChoose = false;
            this.handleQuestion.question = this.question.question
            console.log('*************************')
            SUBJECTSTEST.forEach(element => {
                if (element.id == this.question.question.subject_id) {
                    this.subject = element
                }
            });
            console.log(this.subject)
        }
        // Câu hỏi lịch sử làm bài
        if (this.type == 3) {
            this.canEssay = false
            this.canChoose = false
        }
        if (this.type == 4) {
            this.canUpdate = false
            this.canEssay = true
            this.canChoose = true;
        }
        if (this.type == 5) {
            this.canEssay = false
            this.canChoose = false
        }

        this.infoQuestion = JSON.parse(JSON.stringify(this.question));
        this.page = this.question.page
    },
    data() {
        return {
            subject: null,
            infoQuestion: {},
            subjectTest: SUBJECTSTEST
        }
    },
    mounted() {
        this.statusChoiced()
    },
    methods: {
        back() {
            this.pressUpdate = false
            this.canEssay = false
            this.canChoose = false
            this.handleQuestion = ref({})
            this.writeResult = ref({})
            this.essayAnswer = ref({})
            this.answerUpdate = ref(new Map())
            this.answerDelete = ref(new Set())
            this.answerCreate = ref(new Map())
            this.answer = ref(-1)
            this.infoQuestion = JSON.parse(JSON.stringify(this.question));
            this.statusChoiced()
        },
        statusChoiced() {
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
                    if (this.question.solutions.length != 0) {
                        this.question.solutions.forEach(solution => {
                            let choose = document.getElementById('input_' + solution)
                            choose.checked = true
                        })
                    }

                }
            }

            if (this.type == 3) {
                if (this.question.question.type == 2) {
                    if (this.question.done == 1) {
                        let choose = document.getElementById(this.question.question.question_id + '_choose_' + this.question.solutions[0].id)
                        choose.style.border = "4px solid rgb(16, 249, 4)"
                        let question = document.getElementById("question_" + this.question.question.question_id)
                        question.style.border = "4px solid rgb(16, 249, 4)"
                    } else {
                        if (this.question.done == -1) {
                            let chooseCorrect = document.getElementById(this.question.question.question_id + '_choose_' + this.question.solutions[0].id)
                            chooseCorrect.style.border = "4px solid rgb(16, 249, 4)"
                            let chooseFalse = document.getElementById(this.question.question.question_id + '_choose_' + this.question.history[0].answer)
                            chooseFalse.style.border = "4px solid red"
                            let question = document.getElementById("question_" + this.question.question.question_id)
                            question.style.border = "4px solid red"
                        } else {
                            if (this.question.done == 0) {
                                if (this.question.solutions.length > 0) {
                                    let chooseCorrect = document.getElementById(this.question.question.question_id + '_choose_' + this.question.solutions[0].id)
                                    chooseCorrect.style.border = "4px solid rgb(15, 249, 4)"
                                }
                            } else {
                                let historyAnswer = document.getElementById(this.question.question.question_id + '_choose_' + this.question.history[0].answer)
                                historyAnswer.style.border = "4px solid #6108f2"
                            }
                        }
                    }

                }
                if (this.question.question.type == 1) {
                    if (this.question.done == 1) {
                        this.question.solutions.forEach(solution => {
                            let answerCorrect = document.getElementById('fill_answer_result_' + solution.id)
                            answerCorrect.style.border = "4px solid rgb(16, 249, 4)"
                        })
                        let historyAnswer = document.getElementById(this.question.question.question_id + '_answer')
                        historyAnswer.style.border = "4px solid rgb(16, 249, 4)"
                        let question = document.getElementById("question_" + this.question.question.question_id)
                        question.style.border = "4px solid rgb(16, 249, 4)"
                    } else {
                        if (this.question.done == -1) {
                            let chooseCorrect = document.getElementById(this.question.question.question_id + '_result_' + this.infoQuestion.question.result_id)
                            chooseCorrect.style.border = "4px solid rgb(16, 249, 4)"
                            let chooseFalse = document.getElementById(this.question.question.question_id + '_answer')
                            chooseFalse.style.border = "4px solid red"
                            let question = document.getElementById("question_" + this.question.question.question_id)
                            question.style.border = "4px solid red"
                        } else {
                            if (this.question.done == 0) {
                                this.question.solutions.forEach(solution => {
                                    let answerCorrect = document.getElementById('fill_answer_result_' + solution.id)
                                    console.log('fill_answer_result_' + solution.id)
                                    answerCorrect.style.border = "4px solid rgb(16, 249, 4)"
                                })
                            } else {
                                let historyAnswer = document.getElementById(this.question.question.question_id + '_answer')
                                historyAnswer.style.border = "4px solid #6108f2"
                            }

                        }
                    }
                }
            }
        },
        selectedSubject() {
            return this.subjectTest.find(option => option.id === this.infoQuestion.question.subject_id)
        },
        answerQuestion(answer) {
            if (this.type == 2) {
                if (this.infoQuestion.question.type == 2) {
                    if (!this.solutions.has(answer)) {
                        this.solutions.add(answer)
                    }
                } else {
                    this.solutions.add(answer)
                }
            } else {
                if (this.type == 1) {
                    this.answer = answer
                }
            }
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
                    this.solutions.delete(id)
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
        updateFillAnswer(answer) {
            if (('' + answer.id).includes('new')) {
                answer.question_id = this.infoQuestion.question.question_id
                this.answerCreate.set(answer.id, answer)
            } else {
                answer.question_id = this.infoQuestion.question.question_id
                this.answerUpdate.set(answer.id, answer)
            }
        },

        createFillAnswer(data) {
            data.question_id = this.infoQuestion.question.question_id
            this.answerCreate.set(data.id, data)
            this.solutions.add(data.id)
        },
        deleteFillAnswer(id) {
            if (('' + id).includes('new')) {
                this.answerCreate.delete(id)
            } else {
                if (this.answerUpdate.get(id) != undefined) {
                    this.answerUpdate.delete(id)
                }
                this.answerDelete.add(id)
            }
            this.solutions.delete(id)
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
            this.handleQuestion.question = this.infoQuestion.question
            this.pressUpdate = false
            this.canEssay = false
            this.canChoose = false
            this.solutions.forEach(solution => {
                let check = false
                this.infoQuestion.solutions.forEach(oldSolution => {
                    if (oldSolution.answer_question_test_id == solution) {
                        check = true
                    }
                });
                if (!check) {
                    this.handleQuestion.solutions.create.push(solution)
                }
            });
            this.infoQuestion.solutions.forEach(oldSolution => {
                let check = false
                this.solutions.forEach(solution => {
                    if (oldSolution.answer_question_test_id == solution) {
                        check = true
                    }
                });
                if (!check) {
                    this.handleQuestion.solutions.delete.push(oldSolution)
                }
            });
            this.handleQuestion.answer.create = Array.from(this.answerCreate.values())
            this.handleQuestion.answer.update = Array.from(this.answerUpdate.values())
            this.handleQuestion.answer.delete = Array.from(this.answerDelete.values())
            this.infoQuestion.items.forEach(item => {
                let check = false
                this.question.items.forEach(oldItem => {
                    if (item == oldItem) {
                        check = true
                    }

                })
                if (!check) {
                    this.handleQuestion.items.create.push(item)
                }
            })
            this.question.items.forEach(item => {
                let check = false
                this.infoQuestion.items.forEach(oldItem => {
                    if (item == oldItem) {
                        check = true
                    }

                })
                if (!check) {
                    this.handleQuestion.items.remove.push(item)
                }
            })
            console.log("Handle Question")
            console.log(this.handleQuestion)
            const response = await handleQuestionTest(this.handleQuestion)
            this.infoQuestion = response.data
        },
        submitAnswer() {
            this.$emit('submit', true)
        }
    }
}
</script>
<style>
.select-item-subject {
    display: flex;
}

.values-items-subject {
    display: flex;
    margin-left: 5px;
    min-width: 300px;
}

.info-question {
    background-color: #222;
    color: white;
    margin-top: 15px;
    padding: 15px;
    border-style: solid;
    border-color: #666363;
    display: flex;
    width: 100%;
    box-sizing: border-box;
    overflow-y: hidden scroll;
}

.question-not-note {
    flex: 1 1 70%;
}

.note-icon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: #545151;
    margin-left: 2px;
    margin-right: 2px;
    border-start-start-radius: 60%;
    border-end-start-radius: 60%;
}

.note {
    display: flex;
    margin-left: 2px;
}

.other-note {
    padding-right: 15px;
    padding-left: 15px;
    margin-bottom: 5px;
}

.list-other-note {
    overflow-y: scroll;
}

.note-action {
    display: flex;
    flex-direction: column;
    width: 100%;
    overflow-y: hidden;
}

.action-note {
    display: flex;
    justify-content: flex-end;
}

.note-button {
    margin-left: 2px;
    font-family: 'Kalam', cursive;
    margin-top: 2px;
    margin-right: 15px;
    margin-bottom: 15px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: rgb(249, 245, 245);
    color: rgb(15, 14, 14);
    font-weight: bold;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.note-button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.note-teacher-student {
    width: 100%;
    min-width: 300px;
    flex: 1 1 30%;
}

@import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');

.title-note {
    font-family: 'Kalam', cursive;
}

.note-content {
    width: 100%;
    margin-left: 4px;
    margin-right: 4px;
    min-height: 120px;
    overflow-y: scroll;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.info-question-correct {
    background-color: #222;
    color: white;
    margin-top: 15px;
    padding: 15px;
    border-style: solid;
    border-color: #666363;
}

.action-question {
    margin-top: 2px;
    display: flex;
    justify-content: flex-end;
}

.info-question-false {
    background-color: #222;
    color: white;
    margin-top: 15px;
    padding: 15px;
    border-style: solid;
    border-color: #666363;
}

.brand-color {
    color: #ea4f4c;
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

@import url('vue-multiselect/dist/vue-multiselect.css');
</style>