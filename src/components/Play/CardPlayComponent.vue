<template>
    <div class="player">
        <template v-for="(card, index) in cards" :key="index">
            <input type="checkbox" v-model="selectCard" class="hidden-select" :id="card.id" name="selectCards"
                v-if="type == 1" :value="card.id" />
            <label class="card-library-layout" :for="card.id">
                <slot name="content-card"></slot>
                <div class="name-card">
                </div>
                <div class="circle-glorie">
                    <div class="cover-content-glorie">
                        <div class="content-glorie">
                            5 <i class="fa-solid fa-star icon-star"></i>
                        </div>
                    </div>
                </div>
            </label>
        </template>
    </div>
</template>
<script>
export default {
    name: "CardPlayComponent",
    props: ['type', 'cards'],
    setup() {

    },
    data() {
        return {
            selectCard: [],
        }
    }
}
</script>
<style scoped>
.player {
    display: flex;
}

.card-library-layout {
    display: flex;
    flex-direction: column;
    max-height: 200px;
    /* min-width: 125px; */
    flex: 2;
    max-width: 150px;
    border: 2px solid #fa750f;
    background-color: #c27b24;
    border-radius: 10px;
    box-shadow: -1rem 0 3rem #f7e455;
    margin-top: 25px;
    transition: 0.4s ease-out;
    color: #222;
    position: relative;
    cursor: pointer;
    left: 0px;
}

.card-normal {
    color: white;
    background-color: #056881;
    box-shadow: -1rem 0 3rem #06e0ce;

}

.name-card {
    font-weight: bold;
}

.card-library-layout:not(:first-child) {
    margin-left: -50px;
}

.hidden-select {
    display: none;
}

.hidden-select:checked+.card-library-layout {
    transform: translateY(-20px);
    transition: 0.4s ease-out;
}

.card-library-layout:hover~.card-library-layout {
    position: relative;
    left: 50px;
    transition: 0.4s ease-out;
}

.icon-star {
    color: #FD4;
    margin-left: 2px;
}

.title {
    color: white;
    font-weight: 300;
    position: absolute;
    left: 20px;
    top: 15px;
}

.bar {
    position: relative;
    /* top: 100px; */
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

.card-library-layout:hover .filledbar {
    width: 120px;
    transition: 0.4s ease-out;
}

.circle-glorie {
    position: absolute;
    top: 50px;
    left: calc(50% - 60px);
}

.cover-content-glorie {
    width: 40px;
    height: 40px;
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