<template>
    <div>
        <div class="container-participate-competition">
            <div class="questions">
                <div v-if="type == 1">
                    <MathCompetitionComponent />
                </div>
                <div v-if="type == 2">
                    <MysteryCompetitionComponent />
                </div>
                <div v-if="type == 3">
                    <LuckyNumberComponent />
                </div>
            </div>
            <div class="chat-competition" v-if="type != 3">
                <ChatComponent v-if="displayChat" />
                <i class="fa-solid fa-comment icon-chat" @click="openChat"></i>
            </div>
        </div>
    </div>
</template>
<script>
import ChatComponent from "../ChatComponent.vue";
import { ref } from "vue";
import MathCompetitionComponent from "./MathCompetitionComponent.vue";
import MysteryCompetitionComponent from "./MysteryCompetitionComponent.vue";
import LuckyNumberComponent from "./LuckyNumberComponent.vue";
import { useRoute } from "vue-router";
export default {
    components: {
        ChatComponent,
        MathCompetitionComponent,
        MysteryCompetitionComponent,
        LuckyNumberComponent
    },
    setup() {
        const id = useRoute().params.id
        const displayChat = ref(false)
        return {
            displayChat, id
        }

    },
    mounted() {
        // Test khi chạy thật thì xóa
        if (this.id == 4) {
            this.type = 2
        }
    },
    data() {
        return {
            type: this.id,
            questions: [{
                question: {
                    question_id: 1,
                    type: 4,
                    content: 'OK'
                },
                page: 1
            }, {
                question: {
                    question_id: 1,
                    type: 3,
                    content: 'OK'
                },
                page: 1
            }]
        }
    },
    methods: {
        openChat() {
            this.displayChat = !this.displayChat
        }
    }
}
</script>
<style scoped>
.container-participate-competition {
    margin-left: 15%;
    /* margin-right: 15%; */
    width: 85%;
    margin-top: 5px;
    display: flex;
}

.icon-chat {
    position: fixed;
    right: 35px;
    bottom: 15px;
    font-size: 40px;
    color: #ba7676;
}


.chat-competition {
    position: fixed;
    right: 0px;
    background-color: #ba7676;
    max-width: 30%;
}

.questions {
    /* margin-right: 15%; */
    width: 80%;
}
</style>