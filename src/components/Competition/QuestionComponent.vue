<template>
    <ModalQuestionCompetition :status="status" :question="question" v-if="displayQuestion"
        @close="displayQuestion = !displayQuestion" @submited="submited" />
    <div class="grid-question" v-if="type == 1">
        <div @click="openQuestion" class="box-mystery">
            <div class="task-bar" v-on:click.stop v-if="status == 1">
                <label :for="'image_' + question?.question?.question_id" class="icon-image">
                    <i class="fa-solid fa-upload"></i>
                </label>
                <input @change="handleChangeImage" :id="'image_' + question?.question?.question_id" type="file"
                    class="upload-image" />
            </div>
            <img class="image-question" :src="question?.question?.suggest ? question?.question?.suggest : imageDefault" />
        </div>
    </div>
    <div v-else-if="type == 2" @click="openQuestion" class="character-box">{{
        question?.question?.suggest ? question?.question?.suggest : "" }}</div>
</template>
<script>
import { ref } from 'vue';
import ModalQuestionCompetition from '../Question/ModalQuestionCompetition.vue';

export default {
    props: ['type', 'question', 'status'],
    setup() {
        const imageDefault = "https://thuthuatnhanh.com/wp-content/uploads/2021/07/hinh-anh-dau-cham-hoi-1.jpg";
        const displayQuestion = ref(false);
        const defaulResult = "https://images.pexels.com/photos/6499190/pexels-photo-6499190.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
        const characterDefault = "A";
        const characterResult = ref(null);
        const imageResult = ref(null)
        return {
            displayQuestion,
            imageDefault,
            defaulResult,
            imageResult,
            characterDefault,
            characterResult
        };
    },
    data() {
        return {
            image: ''
        }
    },
    methods: {
        openQuestion() {
            this.displayQuestion = true;
            if (this.type == 1) {
                this.imageResult = this.defaulResult
            } else {
                this.characterResult = this.characterDefault
            }

        },
        handleChangeImage(e) {
            // Xử lý sau khi upload ảnh 
            var file = e.target.files || e.dataTransfer.files;
            if (file.length)
                this.image = file;
            console.log(this.image.length)
        },
        submited(data) {
            // Test
            if (this.type == 1) {
                data.suggest = this.defaulResult
            } else {
                data.suggest = 'A'
            }
            // End test
            this.displayQuestion = false
            this.$emit('submited', data)
        }
    },
    components: { ModalQuestionCompetition }
}
</script>
<style>
.grid-question {
    display: table-cell;
    padding: 2px;
    flex: 1;
}

.box-mystery {
    position: relative;
}

.task-bar {
    position: absolute;
    top: 0px;
    right: 0px;
    color: #222;
    cursor: pointer;
    padding-left: 2px;
    padding-bottom: 2px;
    border-left: 2px solid #c4c2c2;
    border-bottom: 2px solid #c4c2c2;
    color: rgb(255, 115, 0);
}

.task-bar:hover {
    border-color: #05c6ed;
    color: #05c6ed;
}

.icon-image {
    font-size: 20px;
    cursor: pointer;
}

.upload-image {
    display: none;
}

.image-question {
    /* min-width: 40px; */
    width: 100%;
    max-height: 120px;
    cursor: pointer;
}

.character-box {
    display: flex;
    min-width: 25px;
    height: 25px;
    padding: 5px;
    font-size: 25px;
    justify-content: center;
    align-items: center;
    background-color: #fb8906;
    margin-left: 5px;
    margin-top: 5px;
    cursor: pointer;
}
</style>