<template>
    <div class="modal-answer-overlay" style="overflow-y: scroll">
        <div class="solution-modal">
            <LatexComponent :content="answer.content" @update="answerQuestion" />
            <button @click="close()" class="close">X</button>
        </div>

    </div>
</template>

<script>
import { ref } from 'vue';
import LatexComponent from './LatexComponent.vue';
import { getNormalAnswer } from '../services/answer'
export default {
    components: {
        LatexComponent
    },
    setup() {
        const answer = ref({})
        return {
            answer
        }
    },
    mounted() {
        this.handleGetData()
    },
    props: ['idAnswer'],
    methods: {
        async handleGetData() {
            const response = await getNormalAnswer(this.idAnswer)
            this.answer = response.data.data
            console.log(this.answer)
        },
        close() {

            this.$emit("close")
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
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #000000da;
    z-index: 10;
}

.solution-modal {
    min-height: 800px;
    min-width: 800px;

    padding: 20px 0;
    border-radius: 10px;
}


.close {
    display: flex;

    justify-content: center;
    position: relative;
    top: auto;
    margin: 30px 0 0 2px;
    /* width: 20px;
    height: 20px; */
    border-radius: 50%;
    cursor: pointer;
    background-color: blueviolet;
}
</style>