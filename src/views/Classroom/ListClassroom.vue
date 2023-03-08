<template>
    <div class="container">
        <h2>Lớp học của bạn</h2>
        <div class="list-classroom">
            <ClassroomComponent />
            <ClassroomComponent />
            <ClassroomComponent />
            <ClassroomComponent />
            <ClassroomComponent />
            <ClassroomComponent />
        </div>
    </div>
</template>
<script>
import ClassroomComponent from '../../components/Classes/ClassroomComponent.vue'
export default {
    name: "ListClassroom",
    components: {
        ClassroomComponent
    }
}
</script>
<style>
.container {
    margin: 0 15%;
}

.list-classroom {
    display: grid;
    grid-template-columns: auto auto auto;
}
</style>
