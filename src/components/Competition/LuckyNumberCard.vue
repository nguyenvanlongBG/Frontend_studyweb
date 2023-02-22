<template>
    <div class="card" @click="displayGiveFriend">
        <div class="action-card">
            <div class="share-friend" @click="shareFriend" v-on:click.stop>
                <div class="status-card">{{ card.status == 1 ? 'Được tặng' : (card.status == 2 ? 'Đang xử lý' : '') }}
                </div>
                <i class="fa-sharp fa-solid fa-share"></i>
            </div>
            <div v-if="displayShare">
                <span class="title-give">Tặng bạn</span>
                <div class="give-friend">
                    <span>#</span>
                    <input v-on:click.stop class="input-id-friend" type="text" placeholder="Id người nhận" size="20" />
                </div>
                <div class="buttons-give">
                    <button class="give-button" v-on:click.stop>Tặng</button>
                </div>
            </div>
        </div>
        <div class="bar">
            <div class="emptybar"></div>
            <div class="filledbar"></div>
        </div>
        <div class="circle-glorie">
            <div class="cover-content-glorie">
                <div class="content-glorie">
                    {{ card.number }}
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';

export default {
    name: "LuckyNumberCard",
    props: ['card'],
    setup() {
        const displayShare = ref(false)
        return {
            displayShare
        }
    },
    methods: {
        shareFriend() {
            this.displayShare = !this.displayShare
        },
        displayGiveFriend() {
            if (this.displayShare) {
                this.displayShare = false
            }
        }
    }
}
</script>
<style scoped>
.card {
    display: flex;
    flex-direction: column;
    height: 280px;
    width: 200px;
    background-color: #784503;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #f7e455;
    /*   margin-left: -50px; */
    transition: 0.4s ease-out;
    position: relative;
    left: 0px;
}

.card:not(:first-child) {
    margin-left: -50px;
}

.card:hover {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
}

.card:hover~.card {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
}

.status-card {
    color: #d583bb;
}

.action-card {}

.title-give {
    font-weight: bold;
}

.give-friend {
    display: flex;
    margin-top: 4px;
}

.input-id-friend {
    margin-left: 5px;
    background-color: #784503;
    border: 2px solid #f7f2f1;
    min-width: 100px;
}

.share-friend {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    margin-right: 5px;
}

.buttons-give {
    display: flex;
    justify-content: flex-end;
}

.give-button {
    border: 2px solid #784503;
    border-radius: 4px;
    background-color: #737477;
}

.give-button:hover {
    color: #d583bb;
}

.title {
    color: white;
    font-weight: 300;
    position: absolute;
    left: 20px;
    top: 15px;
}

.bar {
    position: absolute;
    top: 100px;
    height: 5px;
    width: 100%;
}

.emptybar {
    background-color: #2e3033;
    width: 100%;
    height: 100%;
}

.filledbar {
    position: absolute;
    top: 0px;
    z-index: 3;
    width: 0px;
    height: 100%;
    background: rgb(0, 154, 217);
    background: linear-gradient(90deg, rgba(0, 154, 217, 1) 0%, rgba(217, 147, 0, 1) 65%, rgba(255, 186, 0, 1) 100%);
    transition: 0.6s ease-out;
}

.card:hover .filledbar {
    width: 120px;
    transition: 0.4s ease-out;
}

.circle-glorie {
    position: absolute;
    top: 150px;
    left: calc(50% - 60px);
}

.cover-content-glorie {
    width: 80px;
    height: 80px;
    border-radius: 50%;
    padding: 4px;
    background: linear-gradient(90deg, rgba(0, 154, 217, 1) 0%, rgba(217, 147, 0, 1) 65%, rgba(255, 186, 0, 1) 100%);
}

.cover-content-glorie:hover {
    width: 64px;
    height: 64px;
    background: linear-gradient(90deg, rgba(0, 154, 217, 1) 0%, rgba(217, 147, 0, 1) 65%, rgba(255, 186, 0, 1) 100%);
    transition: 4s ease-out;
    padding: 2px;
}

.content-glorie {
    border-radius: 50%;
    background-color: #2e3033;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
}
</style>