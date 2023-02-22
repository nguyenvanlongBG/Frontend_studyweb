<template>
    <div class="modal-answer-overlay" style="overflow-y: scroll">
        <div class="solution-modal">
            <div class="content-solution">
                <h4>Câu hỏi</h4>
                <LatexComponent :isUpdate="false" :content="question.content" @update="answerQuestion" />
                <h4>Lời giải của bạn</h4>
                <LatexComponent :isUpdate="true" :content="''" @update="answerQuestion" />
            </div>
            <button @click="close()" class="close-modal-solution">X</button>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue';
import LatexComponent from '../LatexComponent.vue';
export default {
    components: {
        LatexComponent
    },
    setup() {
        const solution = ref({})
        return {
            solution
        }
    },
    props: ['question'],
    methods: {
        close() {
            this.$emit('close')
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