<template>
    <div class="container-class">
        <div class="notifition">
            <NewsClassroomComponent />
        </div>
        <div class="detail">
            <router-view />
        </div>
    </div>
</template>
<script>
import NewsClassroomComponent from '@/components/Classes/NewsClassroomComponent.vue';

export default {
    name: 'DetailClassroom',
    components: {
        NewsClassroomComponent
    }
}
</script>
<style scoped>
.container-class {
    margin: 0 15%;
    display: flex;
}



.detail {
    width: 75%;
    background-color: aliceblue;
}

.notifition {
    width: 25%;
    background-color: white;
}
</style>