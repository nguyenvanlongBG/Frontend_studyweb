<template>
    <div class="list-choice" v-if="render">
        <template v-for="(choice, index) in choiceQuestion" :key="index">
            <input type="radio" class="hidden-radio" :id="choice.id" :name="'choices_question_' + question"
                :value="choice.id" :disabled="!canChoose" />
            <label :class="canChoose ? 'choice' : 'choice nohover'" :id="question + '_choose_' + choice.id"
                @click="canChoose ? choiceAnswer(choice.id) : ''" :for="choice.id">
                <span class="closeChoice" v-if="isUpdate" @click="deleteChoose($event, index)">X</span>
                <span :class="isUpdate || doTest ? 'choice-label' : ''">
                    <!-- Lỗi dấu cách -->
                    <!-- <LatexComponent :content="choice.content" :isUpdate="isUpdate"
                    @update="data => updateChoose(index, data)" /> -->
                    <!-- Fix lỗi dấu cách -->
                    <LatexComponent :content="choice.content" :isUpdate="isUpdate"
                        @update="updateChoose($event, index)" />
                </span>
            </label>
        </template>

        <!-- List câu trả lời mới tạo -->


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
    props: ['choices', 'isUpdate', 'linkNavbar', 'doTest', 'canChoose', 'question', 'type'],
    components: {
        LatexComponent
    },
    setup() {
        const newAnswer = ref("")
        const isCreate = ref(false)
        const newChooses = ref([])
        const render = ref(true)
        const indexNewChoose = ref(0)
        const classChoose = ref("choice")
        return { newAnswer, render, newChooses, isCreate, indexNewChoose, classChoose }
    },
    data() {
        let choices = this.choices
        return {
            // copy data from array not reference
            choiceQuestion: choices
        }
    },


    methods: {
        choiceAnswer(id) {
            this.$emit('chooseAnswer', id)
        },
        updateChoose(content, index) {

            this.choiceQuestion[index].content = content
            let data = {
                'id': this.choiceQuestion[index].id,
                'content': content
            }
            this.$emit('update', data)

        },
        deleteChoose(event, index) {

            event.stopImmediatePropagation()
            // console.log("Click delete")
            let id = this.choiceQuestion[index].id
            this.choiceQuestion.splice(index, 1)
            // console.log(this.choiceQuestion)
            this.render = false

            this.$nextTick(() => {
                this.render = true
            })
            this.$emit('delete', id)
        },
        createChoose() {
            let data = { 'id': this.question + '_new_choose_' + this.indexNewChoose, 'content': "" }
            this.indexNewChoose++
            this.choiceQuestion.push(data)
            this.$emit('create', data)
        }


    }
}

</script>
<style>
.list-choice {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    /* padding: auto;    */
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
    margin-top: 5px;
    min-height: 60px;
    border: 4px solid white;
    border-radius: 2px;
    background-color: white;
    box-sizing: border-box;
}



.choice:not(.nohover):hover {
    display: block;
    position: relative;
    width: 48%;
    margin-top: 5px;
    min-height: 60px;
    border: 4px solid #6108f2;
    border-radius: 2px;
    background-color: rgb(166, 172, 172);
    box-sizing: border-box;
}

.choice-label {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 5px;
    border-style: solid;
    border: 0px;
    border-color: #e2d5d5;
}



input.hidden-radio {
    display: none;
}


.hidden-radio:checked+.choice {
    display: block;
    position: relative;
    width: 48%;
    margin-top: 5px;
    min-height: 60px;
    border: 4px solid #6108f2;
    border-radius: 5px;
    background-color: rgb(166, 172, 172);
    box-sizing: border-box;
}
</style>