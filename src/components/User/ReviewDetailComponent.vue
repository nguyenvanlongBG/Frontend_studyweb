<template>
    <router-view>
        <component :is="Component"></component>
    </router-view>
</template>
<script>
import SpeedReviewComponent from '../User/SpeedReviewComponent.vue'
export default {
    name: "ReviewDetailComponent",
    components: {
        SpeedReviewComponent
    },
    created() {
        if (this.$route.query.type == 1) {
            console.log("Ok")
        } else {
            this.Component = SpeedReviewComponent
        }

    },
    data() {
        return {
            Component: SpeedReviewComponent
        }
    }
}
</script>