<template>
    <div class="info-question" v-for="q in  questions" :key="q.id">
        <div class="action-question">
            <button class="tool-button-test" @click="createTest" v-if="!myTests">
                Sửa
            </button>
            <button class="tool-button-test" @click="createTest" v-if="!myTests">
                Xóa
            </button>
        </div>
        <span class="question-content">
            Câu :


        </span>
        <div class="list-choice">
            <label class="choice" @click="choiceAnswer(1)" for="1" v-for="choice in q.choices" :key="choice.id">
                <input type="radio" class="hidden-radio" id="1" name="ID_Cau_Hoi_1">
                <span class="choice-label">
                    A: {{ choice.content }}
                </span>
            </label>



        </div>
    </div>
</template>
<script>
export default {
    name: "QuestionInfoComponent",
    props: {
        questions,
        hasRole
    },
    data() {

    },
    methods: {

    },


}
</script>
<style>
.info-question {
    background-color: #222;
    color: white;
    margin-top: 15px;
    padding: 15px;
    border-style: solid;
    border-color: #ea4f4c;
    /* padding: px; */
}

.list-choice {
    display: flex;
    flex-wrap: wrap;
    padding: auto;
}

.action-question {
    display: flex;
    justify-content: flex-end;
}

.tool-button-test {
    margin-left: 2px;
    margin-top: 2px;
    height: 35px;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;

}

input.hidden-radio {
    display: none;

}

.list-choice {
    display: flex;
    flex-wrap: wrap;
    padding: auto;
}

.choice {
    display: block;
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
</style>