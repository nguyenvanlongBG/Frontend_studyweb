<template>
    <div :class="'card-library-layout' + (type == 2 ? ' card-normal' : '')" @click="displayGiveFriend">

    </div>
</template>
<script>
export default {
    name: "CardHorizontalComponent",
    props: ['type', 'card'],
    setup() {

    }
}
</script>
<style scoped>
.card-library-layout {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 70px;
    background-color: #a45c03;

    border-radius: 10px;
    /* box-shadow: -4px 0 8px #f7e455; */
    transition: 0.4s ease-out;
    color: #222;
    position: relative;
    cursor: pointer;
    left: 0px;
    border: 2px solid #fa750f;

}

.card-normal {
    color: white;
    background-color: #056881;
    box-shadow: -1rem 0 3rem #06e0ce;

}

.card-library-layout:not(:first-child) {
    margin-left: -50px;
}
</style>