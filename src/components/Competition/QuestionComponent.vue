<template>
    <ModalQuestionCompetition v-if="displayQuestion" @close="displayQuestion = !displayQuestion" />
    <div class="grid-question" @click="openQuestion">
        <img class="image-question" :src="imageResult ? imageResult : imageDefault" />
    </div>
</template>
<script>
import { ref } from 'vue';
import ModalQuestionCompetition from '../Question/ModalQuestionCompetition.vue';

export default {
    setup() {
        const imageDefault = "https://thuthuatnhanh.com/wp-content/uploads/2021/07/hinh-anh-dau-cham-hoi-1.jpg";
        const displayQuestion = ref(false);
        const defaulResult = "https://images.pexels.com/photos/6499190/pexels-photo-6499190.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        const imageResult = ref(null)
        return {
            displayQuestion,
            imageDefault,
            defaulResult,
            imageResult
        };
    },
    methods: {
        openQuestion() {
            this.displayQuestion = true;
            this.imageResult = this.defaulResult
        }
    },
    components: { ModalQuestionCompetition }
}
</script>
<style>
.grid-question {
    display: table-cell;
    padding: 2px;
    min-width: 150px;
}

.image-question {
    max-width: 100%;
    width: 100%;
    max-height: 120px;
}
</style>