<template>
    <div class="list-answer" v-if="render">
        <template v-for="(answer, index) in answersLocal" :key="index">
            <div class="answer" @click="canChoose ? choiceAnswer(choice.id) : ''" :id="'fill_answer_result_' + answer.id">
                <span class="closeChoice" v-if="isUpdate" @click="deleteAnswer($event, index)">X</span>
                <span>
                    <LatexComponent :content="answer.content" :isUpdate="isUpdate" @update="updateAnswer($event, index)" />
                </span>
            </div>
        </template>
        <button class="create-answer" v-if="isUpdate" @click="createAnswer">
            <span class="content-create">+</span>
            <span class="content-create"> Thêm câu trả lời</span>
        </button>
    </div>
</template>
<script>
import { ref } from 'vue';
import LatexComponent from '../LatexComponent.vue'
export default {
    name: "FillAnswerComponent",
    props: ['answers', 'isUpdate', 'linkNavbar', 'doTest', 'canChoose', 'question', 'type'],
    components: {
        LatexComponent
    },
    setup() {
        const render = ref(true)
        const indexNewChoose = ref(0)
        return { render, indexNewChoose }
    },
    data() {
        // let answersLocal = this.answers2
        return {
            // copy data from array not reference
            answersLocal: this.answers
        }
    },


    methods: {
        choiceAnswer(id) {
            this.$emit('chooseAnswer', id)
        },
        updateAnswer(content, index) {

            this.answersLocal[index].content = content
            let data = {
                'id': this.answersLocal[index].id,
                'content': content
            }
            this.$emit('update', data)
        },
        deleteAnswer(event, index) {

            event.stopImmediatePropagation()
            // console.log("Click delete")
            let id = this.answersLocal[index].id
            this.answersLocal.splice(index, 1)
            // console.log(this.choiceQuestion)
            this.render = false

            this.$nextTick(() => {
                this.render = true
            })
            this.$emit('delete', id)
        },
        createAnswer() {
            let data = { 'id': this.question + '_new_choose_' + this.indexNewChoose, 'content': "" }
            this.indexNewChoose++
            this.answersLocal.push(data)
            this.$emit('create', data)
        }


    }
}

</script>
<style>
.list-answer {
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
    margin-top: 5px;
    min-height: 60px;
    background-color: #222;
    border: solid 2px #ea4f4c;
}


.content-create {
    font-size: 20px;
    color: #ea4f4c;

}

.answer {
    display: block;
    position: relative;
    width: 100%;
    margin-top: 5px;
    min-height: 60px;
    border: 4px solid white;
    border-radius: 2px;
    background-color: white;
    box-sizing: border-box;
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
    background-color: white;
    box-sizing: border-box;
}
</style>