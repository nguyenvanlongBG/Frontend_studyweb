<template>
    <div :class="'card-library-layout' + (type == 2 ? ' card-normal' : '')" @click="displayGiveFriend">

    </div>
</template>
<script>
export default {
    name: "CardVerticalComponent",
    props: ['type', 'card'],
    setup() {

    }
}
</script>
<style scoped>
.card-library-layout {
    display: flex;
    flex-direction: column;
    height: 70px;
    min-width: 70px;
    background-color: #da7b07;
    border-radius: 10px;
    box-shadow: -4px 0 8px #f7e455;
    margin-top: 25px;
    transition: 0.4s ease-out;
    color: #222;
    position: relative;
    cursor: pointer;
    left: 0px;
    border: 2px solid #518b9b;
}

.card-normal {
    color: white;
    background-color: #056881;
    box-shadow: -1rem 0 3rem #06e0ce;

}

.card-library-layout:not(:first-child) {
    margin-top: -50px;
}
</style>