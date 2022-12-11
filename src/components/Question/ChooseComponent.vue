<template>
    <div class="list-choice">
        <label class="choice" @click="choiceAnswer(1)" for="1" v-for="(choice, index) in choiceQuestion"
            :key="choice.id">
            <span class="closeChoice" v-if="isUpdate" @click="deleteChoose(index)">X</span>
            <input type="radio" class="hidden-radio" id="1" name="ID_Cau_Hoi_1">
            <span class="choice-label">
                <LatexComponent :content="choice.content" :isUpdate="isUpdate"
                    @update="data => updateChoose(index, data)" />
                <!-- A: {{ choice.content }} -->
            </span>
        </label>

        <!-- List câu trả lời mới tạo -->
        <label class="choice" v-for="(newChoose, index) in newChooses" :key="index">
            <span class="closeChoice" @click="deleteNewChoose(index)" v-if="isUpdate">X</span>
            <input type="radio" class="hidden-radio" id="1" name="ID_Cau_Hoi_1">
            <span class="choice-label">

                <LatexComponent :content="newChoose" :isUpdate="isUpdate"
                    @update="data => updateNewChoose(index, data)" />
                <!-- A: {{ choice.content }} -->
            </span>
        </label>



        <button class="create-answer" v-if="isUpdate" @click="createChoose">
            <span class="content-create">+</span>
            <span class="content-create"> Thêm câu trả lời</span>
        </button>
    </div>
</template>
<script>
import { ref } from 'vue';
import LatexComponent from '../LatexComponent.vue'
export default {
    name: "ChooseComponent",
    props: ['choices', 'isUpdate'],
    components: {
        LatexComponent
    },
    setup() {
        const choiceQuestion = ref([])
        const newAnswer = ref("")
        const isCreate = ref(false)
        const newChooses = ref([])
        return { choiceQuestion, newAnswer, newChooses, isCreate }
    },
    created() {
        this.choiceQuestion = this.choices
    },
    methods: {
        choiceAnswer($id) {
            var answer = document.getElementById("question_" + $id);
            answer.classList.add("answer-content-choice");
        },
        updateChoose($index, $data) {
            // this.choiceQuestion[$index] = $data
            this.choiceQuestion[$index] = $data
            // this.$emit('update', $index, $data)
        },
        deleteChoose($index) {
            this.choiceQuestion.splice($index, 1)
            // this.choiceQuestion[$index] = $data
            // this.$emit('deleteChoose', $index)
        },
        createChoose() {
            // console.log(this.isUpdate)
            var content = ""
            this.newChooses.push(content)
            // this.$emit('createChoose', $data)
        },
        updateNewChoose($index, $data) {
            this.newChooses[$index] = $data
        },
        deleteNewChoose($index) {
            this.newChooses.splice($index, 1)
        },

    }
}

</script>
<style>
.list-choice {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: auto;
}

.closeChoice {
    position: absolute;
    right: 0px;
    top: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 30px 0 0 2px; */
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    z-index: 2;
    background-color: #ea4f4c;
}

.create-answer {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    width: 48%;
    font-weight: bold;
    margin-left: 5px;
    margin-top: 5px;
    min-height: 60px;
    background-color: #222;
    border: solid 2px #ea4f4c;
}


.content-create {
    font-size: 20px;
    color: #ea4f4c;

}

.choice {
    display: block;
    position: relative;
    width: 48%;
    margin-left: 5px;
    margin-top: 5px;
    min-height: 60px;
}

.choice-label {
    display: block;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border-radius: 5px;
    border-style: solid;
    border-color: #e2d5d5;

}

.choice-label:hover {
    display: block;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-radius: 5px;
    border-color: #05a317;
    background-color: rgb(166, 172, 172);
    box-sizing: border-box;
}


input.hidden-radio:checked+span.choice-label {
    display: block;
    width: 100%;
    height: 100%;
    border-style: solid;
    border-radius: 5px;
    border-color: #05a317;
    background-color: rgb(166, 172, 172);
    box-sizing: border-box;
}
</style>