<template>
    <div class="modal-answer-overlay" style="overflow-y: scroll" v-if="render">
        <div class="question-competition">
            <div class="info-question-competition">
                <QuestionComponent ref="question" :type="status ? 2 : 1" :isOwner="true" :question="question" />
                <button @click="submit()" class="tool-button-test right">Gửi</button>
            </div>
            <button @click="close()" class="close-modal-solution">X</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import QuestionComponent from './QuestionComponent.vue';
export default {
    components: {
        QuestionComponent
    },
    props: ['question', 'status'],
    setup() {
        const solution = ref({})
        // const question = ref({
        //     question: {
        //         content: 'OK'
        //     },
        //     page: 1
        // })
        const render = ref(true)
        return {
            solution, render
        }
    },

    mounted() {
        this.handleGetData()
    },
    methods: {
        async handleGetData() {
            console.log(this.question)
            this.render = false
            this.$nextTick(() => {
                this.render = true
            })
        },
        submit() {
            this.$emit('submited', { id: this.question.question.question_id, suggest: "A" })
        },
        close() {
            this.$emit('close')
        },
        answerQuestion() {

        }
    }
}

</script>
<style>
.modal-answer-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #000000da;
    z-index: 100;
}

.question-competition {
    display: flex;
    margin-top: 100px;
}

.info-question-competition {
    min-height: 800px;
    min-width: 800px;
    position: relative;
}

.solution-modal {
    min-height: 800px;
    min-width: 800px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 20px 0;
    border-radius: 10px;
}

.content-solution {
    width: 100%;
}

.right {
    position: absolute;
    right: 0px;
}

.close-modal-solution {
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: blueviolet;
}
</style>