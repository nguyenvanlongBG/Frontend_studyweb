<template>
    <div class="container-glories">
        <div class="glorie-network">
            <GlorieComponent />
            <GlorieComponent />
        </div>
    </div>
<!-- <FireCongulateComponent>

</FireCongulateComponent> --></template>
<script>
// import FireCongulateComponent from '../FireCongulateComponent.vue';
import GlorieComponent from './GlorieComponent.vue';

export default {
    name: "GloriesComponent",
    components: {
        GlorieComponent,
        // FireCongulateComponent
    }
}
</script>
<style scoped>
.container-glories {
    margin: 0 15%;
    overflow-y: hidden scroll;
}
</style>