<template>
    <div class="container-test">
        <router-view v-slot="{ Component }">
            <component :is="Component">
            </component>
        </router-view>
    </div>
</template>
<script>
export default {
    name: "TestDetailComponent",
    components: {

    },

    mounted() {

    },
    methods: {

    },
}
</script>
<style>
/* 
.answer-content-choice {
    background-color: #222;
    border-color: #222;
    color: white;
} */
.container-test {
    /* margin: 0 15%; */
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

.action-question {
    margin-top: 2px;
    display: flex;
    justify-content: flex-end;
}
</style>