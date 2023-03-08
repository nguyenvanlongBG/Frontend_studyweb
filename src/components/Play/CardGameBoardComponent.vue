<template>
    <div class="container" v-if="refresh">
        <div class="container-board">
            <div :class="'top' + (top == turn ? ' turn-player' : '')" id="player_1">
                <div class="storage-card">
                    <span class="title-accumulation">Tích lũy</span>
                    <div class="card-library-layout-storage card-top">
                        5
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
                    <div :class="'other-box-cards' + (left == turn ? ' turn-player' : '')" id="player_2">
                        <div class="other-player">
                            <div class="storage-card-mid">
                                <span class="title-accumulation">Tích lũy</span>
                                <div class="card-library-layout-storage card-mid">
                                    2
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
                            <div class="numerical-round">
                                Round 1
                            </div>
                            <div class="number-card-round">
                                <div>Tích lũy:
                                    <span class="number">4</span>
                                </div>
                                <div class="card-library-layout-storage card-top">

                                </div>
                            </div>
                        </div>
                        <div class="board-game">
                            <CardPlayComponent :cards="cardsAttack" />
                        </div>
                    </div>
                    <div :class="'other-box-cards' + (right == turn ? ' turn-player' : '')">
                        <div class="special-box-items-vertical">
                            <CardVerticalComponent v-for="card in cards" :type="1" :card="card" :key="card.id" />
                        </div>
                        <div class="other-player" id="player_3">
                            <div class="storage-card-mid">
                                <span class="title-accumulation">Tích lũy</span>
                                <div class="card-library-layout-storage card-mid">
                                    2
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
            <div :class="'bottom' + (myself == turn ? ' turn-player' : '')" id="4">
                <div class="my-storage-card">
                    <span class="title-accumulation">Tích lũy</span>
                    <div class="card-library-layout-storage card-top">
                        4
                    </div>
                </div>
                <div class="cards">
                    <CardPlayComponent :cards="cards" :type="1" ref="cardsPlay" />
                </div>
                <div class="actions-game">
                    <button class="button-action" @click="attackCard">Đánh</button>
                    <button class="button-action">Bỏ lượt</button>
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
        const refresh = ref(true)
        return {
            displayChat, refresh
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
            cardsAttack: [
                { id: 9, name: "Đề thi hàm số", stars: 5 }, { id: 10, name: "Đề thi bất phương trình", stars: 5 },
                { id: 11, name: "Đề thi hình học không gian", stars: 5 }, { id: 12, name: "Đề thi hình học giải tích", stars: 5 },
                { id: 13, name: "Đề thi hình học giải tích", stars: 5 }, { id: 101, name: "Đề thi hình học không gian", stars: 5 }, { id: 103, name: "Đề thi hình học giải tích", stars: 5 },
                { id: 104, name: "Đề thi hình học giải tích", stars: 5 },
            ],
            storageCards: [
                { id: 1, name: "Đề thi hàm số", stars: 5 }
            ],
            top: 1,
            left: 2,
            right: 3,
            myself: 4,
            turn: 2
        }
    },
    methods: {
        openChat() {
            this.displayChat = !this.displayChat
        },
        attackCard() {
            this.cardsAttack = this.$refs.cardsPlay.selectCard
            console.log(this.cardsAttack)
            this.refresh = false
            this.$nextTick(() => {
                this.refresh = true
            })

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
    /* width: 250px; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    /* background-color: rgb(77, 160, 232); */
}

.turn-player {
    border: 4px solid #d54110;
    border-radius: 5px;
}

.top {
    display: flex;
    justify-content: center;
    width: 100%;
    flex-grow: 2;
}

.title-accumulation {
    text-align: center;
    padding: 2px;
    font-weight: bold;
}

.bottom {
    display: flex;
    justify-content: center;
    width: 100%;
    min-height: 250px;
    max-height: 300px;
}

/* .left,
.right {
    margin-top: 15px;
} */

.mid {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-grow: 1;
}

.box-board {
    width: 100%;
    min-height: 250px;
    display: flex;
    flex-direction: column;
}

.info-board {
    border-width: 2px;
    border-style: solid;
    width: 120px;
    border-radius: 5px;
    background-color: #222;
    border-color: #f9770c;

}

.numerical-round {
    display: flex;
    justify-content: center;
    font-size: 25px;
    color: red;
    font-weight: bold;
}

.number-card-round {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-weight: bold;
    color: white;
}

.number-card-round .number {
    display: flex;
    justify-content: center;
    color: red;
    font-size: 30px;
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
    height: 200px;
}

.storage-card {
    display: flex;
    height: 90px;
    /* width: 180px; */
    justify-content: center;
    align-items: center;
}

.my-storage-card {
    padding-top: 15px;
    display: flex;
    flex-direction: column;
    /* width: 180px; */
    align-items: center;
}

.storage-card-mid {
    display: flex;
    flex-direction: column;
    /* height: 150px;
    width: 150px; */
    /* transform: rotate(90deg); */
}

.player {
    display: flex;
    width: 100%;
    height: 100%;
    margin-left: 60px;
}

.special-box-items-vertical {
    display: flex;
    flex-direction: column;
    width: 125px;
    padding-left: 5px;
    padding-right: 5px;
}

.card-library-layout-storage {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    font-weight: bold;
    flex-direction: column;
    background-color: #089bf0;
    border-radius: 10px;
    box-shadow: -4px 0 8px #f7e455;
    transition: 0.4s ease-out;
    color: #222;
    position: relative;
    cursor: pointer;
    left: 0px;
    border: 2px solid #518b9b;
}

.bottom .cards {
    display: flex;
    width: 100%;
}

.card-top {
    height: 60px;
    width: 40px;
}

.card-mid {
    width: 60px;
    height: 40px;
}

.actions-game {
    display: flex;
    flex-direction: column;
    margin-top: 25px;
}

.button-action {
    margin-left: 2px;
    margin-top: 10px;
    min-height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.button-action:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>