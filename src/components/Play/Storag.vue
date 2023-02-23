<template>
    <div class="container">
        <div class="container-board">
            <div class="top">
                <div class="storage-card">
                    <div class="card-library-layout-storage">
                    </div>
                </div>
                <div class="avatar">
                    <a href="" class="circle">
                        <img width="64" height="64"
                            src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                    </a>
                </div>
                <div class="other-player-top">
                    <CardHorizontalComponent v-for="card in cards" :type="1" :card="card" :key="card.id" />
                </div>
            </div>
            <div class="mid">
                <div class="player-mid">
                    <div class="other-box-cards">
                        <div class="other-player">
                            <div class="storage-card-mid">
                                <div class="card-library-layout-storage">
                                </div>
                            </div>
                            <div class="avatar">
                                <a href="" class="circle">
                                    <img width="64" height="64"
                                        src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                                </a>
                            </div>
                        </div>
                        <div class="special-box-items-vertical">
                            <CardVerticalComponent v-for="card in cards" :type="1" :card="card" :key="card.id" />
                        </div>
                    </div>
                    <div class="box-board">
                        <div class="info-board">
                            <div>
                                Round 1
                            </div>
                            <div>
                                4 thẻ
                            </div>
                        </div>
                        <div class="board-game">
                            <CardPlayComponent :cards="cards" />
                        </div>
                    </div>
                    <div class="other-box-cards">
                        <div class="special-box-items-vertical">
                            <CardVerticalComponent v-for="card in cards" :type="1" :card="card" :key="card.id" />
                        </div>
                        <div class="other-player">
                            <div class="storage-card-mid">
                                <div class="card-library-layout-storage">
                                </div>
                            </div>
                            <div class="avatar">
                                <a href="" class="circle">
                                    <img width="64" height="64"
                                        src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="bottom">
                <div class="storage-card">
                    <div class="card-library-layout-storage">
                    </div>
                </div>
                <div>
                    <CardPlayComponent :cards="cards" />
                </div>
            </div>
        </div>
        <div class="chat-competition">
            <ChatComponent v-if="displayChat" />
            <i class="fa-solid fa-comment icon-chat" @click="openChat"></i>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import ChatComponent from '../ChatComponent.vue';
import CardPlayComponent from '../Play/CardPlayComponent';
import CardHorizontalComponent from './CardHorizontalComponent.vue';
import CardVerticalComponent from './CardVerticalComponent.vue'
export default {
    name: "CardGameComponent",
    components: { CardPlayComponent, CardVerticalComponent, CardHorizontalComponent, ChatComponent },
    setup() {
        const displayChat = ref(false)
        return {
            displayChat
        }
    },
    data() {
        return {
            cards: [
                { id: 1, name: "Đề thi hàm số", stars: 5 }, { id: 2, name: "Đề thi bất phương trình", stars: 5 },
                { id: 3, name: "Đề thi hình học không gian", stars: 5 }, { id: 4, name: "Đề thi hình học giải tích", stars: 5 },
                { id: 5, name: "Đề thi hình học giải tích", stars: 5 }, { id: 6, name: "Đề thi hình học không gian", stars: 5 }, { id: 7, name: "Đề thi hình học giải tích", stars: 5 },
                { id: 8, name: "Đề thi hình học giải tích", stars: 5 },

            ],
            storageCards: [
                { id: 1, name: "Đề thi hàm số", stars: 5 }
            ]
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
.container {
    margin-left: 15%;
    width: 85%;
    margin-top: 5px;
    display: flex;
}

.container-board {
    width: 80%;
    background-color: aliceblue;
}

.chat-competition {
    position: fixed;
    right: 0px;
    background-color: #ba7676;
    max-width: 30%;
}

.icon-chat {
    position: fixed;
    right: 35px;
    bottom: 15px;
    font-size: 40px;
    color: #ba7676;
}

.circle {
    display: inline-block;
    vertical-align: middle;
    border: 4px solid rgba(200, 200, 200, 0.4);
    border-radius: 50%;
    vertical-align: middle;
}

.circle img {
    border-radius: 50%;
}

.circle:hover {
    transition: ease-out 0.2s;
    border: 4px solid rgba(203, 31, 31, 0.25);
}

.other-player {
    display: flex;
    flex-direction: column;
}

.avatar {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 5px;
}

.other-box-cards {
    width: 250px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* background-color: rgb(77, 160, 232); */
}

.top {
    display: flex;
    justify-content: center;
    width: 100%;
}

.bottom {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
}

/* .left,
.right {
    margin-top: 15px;
} */

.mid {
    width: 100%;
    display: flex;
    justify-content: center;
}

.box-board {
    width: 40%;
    min-height: 250px;
    display: flex;
}

.player-left,
.player-right {
    display: flex;
    flex-direction: column;
}

.player-mid {
    width: 100%;
    display: flex;
    justify-content: space-between;
}

.other-player-top {
    display: flex;
    height: 125px;
}

.board-game {
    display: flex;
    margin-left: 50px;
    height: 200px;
}

.storage-card {
    display: flex;
    height: 90px;
    width: 180px;
    justify-content: center;
    align-items: center;
}

.storage-card-mid {
    display: flex;
    /* height: 150px;
    width: 150px; */
    transform: rotate(90deg);
}

.player {
    display: flex;
    width: 100%;
    height: 100%;
}

.special-box-items-vertical {
    display: flex;
    flex-direction: column;
    width: 125px;
}

.card-library-layout-storage {
    display: flex;
    flex-direction: column;
    height: 80px;
    width: 60px;
    background-color: #089bf0;
    border-radius: 10px;
    box-shadow: -4px 0 8px #f7e455;
    margin-top: 25px;
    transition: 0.4s ease-out;
    color: #222;
    position: relative;
    cursor: pointer;
    left: 0px;
    z-index: 20;
    border: 2px solid #518b9b;
}
</style>