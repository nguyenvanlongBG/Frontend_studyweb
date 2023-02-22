<template v-if="reload">
    <div class="nav-question">
        <Transition name="slide-fade">
            <div class="overview-exam" v-if="displayShrink">
                <span class="nameUser">
                    Họ và tên: Nguyễn Văn A
                </span>
                <div>
                    <span class="navbar-list-question">
                        Danh sách câu hỏi
                    </span>
                    <div class="list-numerical-question">
                        <template v-for="(question, index) in numericalQuestion.data" :key="index">
                            <div :class="classType[parseInt(question.type)]" :id="'link_' + question.id"
                                @click="moveToQuestion(question.page, question.id)">
                                {{ index + 1 }}
                            </div>
                        </template>

                    </div>
                </div>
            </div>
        </Transition>
        <div class="nav-hiden-display" @click="displayShrink = !displayShrink">
            <i class="fa-solid fa-caret-left" v-if="displayShrink"></i>
            <i class="fa-solid fa-caret-right" v-if="!displayShrink"></i>
        </div>
    </div>
</template>
<script>
import { ref, Transition } from 'vue';

export default {
    name: "NavbarListComponent",
    props: ["numericalQuestion", "render"],
    watch: {
        render() {
            this.reload = false;
            console.log("OK");
            this.$nextTick(() => {
                this.reload = true;
            });
        }
    },
    setup() {
        // console.log(this.questions)
        const reload = ref(true);
        const classType = ref(["stt-question answer-content-choice", "stt-question answer-content-choice-checked", "stt-question answer-content-choice-true", "stt-question answer-content-choice-wrong"]);
        const displayShrink = ref(true);
        const classNav = ref("class-nav");
        return {
            classType,
            reload,
            displayShrink,
            classNav
        };
    },
    methods: {
        moveToQuestion(page, id) {
            console.log("In navbar");
            console.log("Navbar page " + page);
            this.$emit("moveQuestion", page, "question_" + id);
        }
    },
    components: { Transition }
}
</script>
<style>
.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.8s ease-out;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
    transform: translateX(20px);
    opacity: 0;
}

.nav-question {
    display: flex;
    border-style: solid;
    min-width: 21%;
    min-height: 250px;
    position: fixed;
    z-index: 100;
}

.class-nav {
    flex-basis: 15px;
}

.nav-hiden-display {
    text-align: center;
    overflow-x: hidden;
    min-width: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #e2dfdf;
    right: 0px;
}

.overview-exam {
    border-style: solid;
    width: 100%;
    /* position: fixed; */
    /* border-top: 5px solid #ea4f4c; */
}



.list-numerical-question {
    display: grid;
    grid-template-columns: repeat(5, 20%);
    margin-top: 10px;
    padding-top: 5px;
    border-top: 5px solid #ea4f4c;

}

.navbar-list-question {
    font-weight: bold;
}

.stt-question {
    display: inline-grid;
    text-align: center;
    align-items: center;
    margin: 1px;
    height: 40px;
    min-width: 55px;
    border-style: solid;
    border-radius: 5px;
}

.answer-content-choice {
    background-color: white;
    border-color: #222;
    color: #222;
}

.answer-content-choice-checked {
    background-color: #222;
    border-color: #222;
    color: white;
}

.answer-content-choice-true {
    background-color: rgb(24, 247, 13);
    border-color: #222;
    color: white;
}

.answer-content-choice-wrong {
    background-color: rgb(236, 10, 10);
    border-color: #222;
    color: white;
}
</style>