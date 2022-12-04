<template>
    <MenuComponent />
    <router-view></router-view>
</template>

<script>
import MenuComponent from '../MenuComponent.vue';

export default {
    name: 'DefaultLayout',
    components: {
        MenuComponent
    }
}
</script>

<style >

</style>
