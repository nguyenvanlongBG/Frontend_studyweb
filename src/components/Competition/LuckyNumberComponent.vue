<template>
    <div>
        <draggable v-model="cards" class="container-lucky-number drag-area">
            <transition-group>
                <LuckyNumberCard v-for="card in cards" :key="card.id" :card="card" />
            </transition-group>
        </draggable>
    </div>
</template>
<script>
import LuckyNumberCard from './LuckyNumberCard.vue';
import { VueDraggableNext } from 'vue-draggable-next'
export default {
    name: "LuckyNumberComponent",
    components: { LuckyNumberCard, draggable: VueDraggableNext, },
    data() {
        return {
            cards: [{ id: 1, number: 1, status: 0 }, { id: 2, number: 2, status: 0 }, { id: 1, number: 3, status: 0 },
            { id: 1, number: 4, status: 1 }, { id: 1, number: 5, status: 0 }, { id: 1, number: 6, status: 0 },
            { id: 1, number: 7, status: 2 }, { id: 1, number: 8, status: 1 }, { id: 1, number: 9, status: 0 }
            ]
        }
    }
}
</script>
<style scoped>
body {
    background-color: #16170e;
    font-family: 'Open Sans', sans-serif;
}


.circle {
    display: flex;
    padding: 2px;
    /* border: 2px solid; */
    max-width: 45px;
    max-height: 45px;
    /* border: 4px solid rgba(200, 200, 200, 0.4);  */
    border-radius: 50%;
}

.circle img {
    align-items: center;
    border-radius: 50%;
}

.circle:hover {
    background: linear-gradient(90deg, rgba(0, 154, 217, 1) 0%, rgba(217, 147, 0, 1) 65%, rgba(255, 186, 0, 1) 100%);
    transition: 1s ease-out;
}

.information {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    color: #222;
    font-weight: bold;
}

.information-user {
    display: flex;
}


.container-lucky-number {
    margin-top: 15px;
    height: 300px;
    top: 60px;
    background-color: #b79c3a;
    /* left: calc(50% - 300px); */
    display: flex;
}

.drag-area {
    display: flex;
}

.stroke {
    stroke: white;
    stroke-dasharray: 360;
    stroke-dashoffset: 360;
    transition: 0.6s ease-out;
}

svg {
    fill: #17141d;
    stroke-width: 2px;
}

.card:hover .stroke {
    stroke-dashoffset: 100;
    transition: 0.6s ease-out;
}
</style>