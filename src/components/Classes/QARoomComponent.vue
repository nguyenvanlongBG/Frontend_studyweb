<template>
    <ListRespondentModal v-if="displayModalRespondents" @close="displayModalRespondents = false" />
    <div class="container-qa-room">
        <div class="chat-competition">
            <ChatComponent v-if="displayChat" @back="hiddenChat" />
            <i class="fa-solid fa-comment icon-chat" @click="openChat"></i>
        </div>
        <div class="action-group">
            <div class="tool-button">
                Hôm nay
            </div>
            <div class="tool-button">
                Buổi trước
            </div>
        </div>
        <div class="box-answer-group">
            <div class="label-answer-group">Nhóm trả lời</div>
            <div class="answer-group" @click="openModalRespondents">
                <div class="list-respondent">
                    <div class="respondent" v-for="item in [0, 1, 2, 3, 4]" :key="item">
                        <div href="" class="circle" v-if="respondents[item]">
                            <img width="45" height="45" :src="respondents[item]?.avatar" />
                        </div>
                    </div>
                </div>
                <div v-if="respondents.length > 1" class="see-more-respondent">+9</div>
            </div>
        </div>
        <div v-for="(question, index) in questions" :key="index">
            <QuestionComponent :type="0" :isOwner="false" :question="question" />
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import ChatComponent from '../ChatComponent.vue';
import ListRespondentModal from '../common/ListRespondentModal.vue';
import QuestionComponent from '../Question/QuestionComponent.vue';

export default {
    name: "QARoomComponent",
    components: { QuestionComponent, ChatComponent, ListRespondentModal },
    setup() {
        const displayModalRespondents = ref(false)
        const displayChat = ref(false)
        return {
            displayChat, displayModalRespondents
        }
    },
    data() {
        return {
            respondents: [
                { id: 1, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 2, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 1, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 2, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 1, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 2, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 1, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },
                { id: 2, avatar: "http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" },

            ],
            questions: [{
                question: {
                    scope: 0,
                    question_id: 1,
                    type: 4,
                    content: "OK"
                },
                page: 1
            }, {
                question: {
                    scope: 0,

                    question_id: 1,
                    type: 3,
                    content: "OK"
                },
                page: 1
            },
            {
                question: {
                    scope: 0,
                    question_id: 1,
                    type: 4,
                    content: "OK"
                },
                page: 1
            }, {
                question: {
                    scope: 0,
                    question_id: 1,
                    type: 3,
                    content: "OK"
                },
                page: 1
            }, {
                question: {
                    scope: 0,
                    question_id: 1,
                    type: 4,
                    content: "OK"
                },
                page: 1
            }, {
                question: {
                    scope: 0,
                    question_id: 1,
                    type: 3,
                    content: "OK"
                },
                page: 1
            }]
        };
    },
    methods: {
        openChat() {
            this.displayChat = !this.displayChat
        },
        hiddenChat() {
            this.displayChat = false
        },
        openModalRespondents() {
            this.displayModalRespondents = true
        }
    }
}
</script>
<style scoped>
.container-qa-room {
    width: 100%;
}

.action-group {
    display: flex;
    justify-content: flex-end;
}

.answer-group {
    display: flex;
    margin-left: 5px;
    cursor: pointer;
}

.answer-group:hover {}

.list-respondent {
    display: flex;
}

.respondent {
    display: block;
    min-width: 25px;
}


.see-more-respondent {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
    cursor: pointer;
}

.see-more-respondent:hover {
    color: #028fab;
}

.information-user {
    display: flex;
}

.margin-respondent {
    margin-left: -30px;
}

.list-respondent .respondent:not(:first-child) {
    margin-left: -30px;
}


.circle {
    display: inline-block;
    border: 4px solid rgba(200, 200, 200, 0.4);
    border-radius: 50%;
}

.circle img {
    border-radius: 50%;
}

/* .circle:hover {
    transition: ease-out 0.2s;
    border: 4px solid rgba(203, 31, 31, 0.25);
} */

.event-group {
    margin-top: 15px;
    overflow-y: hidden scroll;
}

.detail-event {
    margin-top: 15px;
    display: flex;
    background-color: #dfdcdc;
    border-radius: 5px;
    padding: 15px;
}

.image-event-group {
    height: 300px;
}

.info-event {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: space-between;
}

.action-event {
    display: flex;
    justify-content: flex-end;
    height: 35px;
}

.info-event-detail {
    font-size: 20px;
    font-weight: bold;
}

.special-info {
    color: #02667a;
}

.tool-button {
    margin-left: 2px;
    margin-top: 2px;
    min-height: 25px;
    min-width: 65px;
    /* height: 35px; */
    box-shadow: 0 8px #999;
    padding: 2px;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.tool-button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.box-answer-group {
    display: flex;
}

.label-answer-group {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    font-weight: bold;
}

.icon-chat {
    position: fixed;
    right: 35px;
    bottom: 15px;
    font-size: 40px;
    color: #ba7676;
    cursor: pointer;
}


.chat-competition {
    position: fixed;
    right: 0px;
    background-color: #ba7676;
    max-width: 30%;
    z-index: 100;
}
</style>