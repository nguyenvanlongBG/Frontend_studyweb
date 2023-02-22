<template>
    <section>
        <div class="container-glorie">
            <i class="fa-solid fa-angle-left move-tab-glorie" @click="moveTab(-1)"></i>
            <TabGlorieComponent :tab="tabs[index]" />
            <i class="fa-solid fa-angle-right move-tab-glorie" @click="moveTab(1)"></i>
        </div>
</section>
</template>
<script>
// import GlorieUserComponent from './GlorieUserComponent.vue';

import { ref } from 'vue';
import TabGlorieComponent from './TabGlorieComponent.vue';

export default {
    name: "GlorieComponent",
    props: [],
    components: { TabGlorieComponent },
    setup() {
        const index = ref(0)
        return {
            index
        }
    },
    data() {
        return {
            tabs: [{ nameTest: "Test 1" }, { nameTest: "Test 2" }]
        }
    },
    methods: {
        moveTab(move) {
            this.index += move
            console.log(move)
        }
    }
}
</script>
<style scoped>
section {
    /* background: #0c0c0c; */
    padding-top: 50px;
}

.container-glorie {
    display: flex;
    max-width: 1044px;
    background-color: #01586e;
    /* opacity: 0.5; */
    margin: 0 auto;
    /* padding-left: 20px; */
    border: 5px solid #4b2702;
    min-height: 450px;
}

.move-tab-glorie {
    font-size: 25px;
    display: flex;
    align-items: center;
}
</style>