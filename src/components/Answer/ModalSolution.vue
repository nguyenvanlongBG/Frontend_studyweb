<template>
    <div class="modal-answer-overlay" style="overflow-y: scroll" v-if="render">
        <div class="solution-modal">
            <div class="content-solution">
                <h4>Câu hỏi</h4>
                <LatexComponent :isUpdate="false" :content="question.content" />
                <h4>Lời giải</h4>
                <LatexComponent :isUpdate="false" :content="solution.content" @update="answerQuestion" />
            </div>
            <button @click="close()" class="close-modal-solution">X</button>
        </div>
        <div class="chat-answer">
            <div class="content-chat">
                <ChatComponent v-if="displayChat" />
            </div>
            <i class="fa-solid fa-comment icon-chat" @click="openChat"></i>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import LatexComponent from '../LatexComponent.vue';
import { getNormalAnswer } from '../../services/answer'
import ChatComponent from '../ChatComponent.vue';
export default {
    components: {
        LatexComponent,
        ChatComponent
    },
    setup() {
        const solution = ref({})
        const render = ref(true)
        const displayChat = ref(false)
        return {
            solution, render, displayChat
        }
    },

    mounted() {
        this.handleGetData()
    },
    props: ['idSolution', 'question'],
    methods: {
        async handleGetData() {
            const response = await getNormalAnswer(this.idSolution)
            this.solution = response.data
            this.render = false
            this.$nextTick(() => {
                this.render = true
            })
        },
        openChat() {
            this.displayChat = !this.displayChat
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

.chat-answer {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    min-height: 400px;
    right: 25px;
    bottom: 15px;
    max-width: 30%;
}

.icon-chat {
    display: flex;
    justify-content: flex-end;
    /* position: absolute; */
    /* right: 35px; */
    /* bottom: 15px; */
    margin-right: 0px;
    font-size: 40px;
    color: #ba7676;
}

.content-chat {
    /* position: absolute; */
    /* margin-right: 15px; */
    margin-bottom: 15px;
    background-color: #ba7676;
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