<template>
    <div class="body-glories">
        <div class="container-glories">
            <div class="glorie-network">
                <GlorieComponent />
                <GlorieComponent />
                <GlorieComponent />
                <GlorieComponent />
            </div>
        </div>
    </div>
    <!-- <FireCongulateComponent>

</FireCongulateComponent> -->
</template>
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
.body-glories {}

.container-glories {
    overflow-y: hidden scroll;
}
</style>