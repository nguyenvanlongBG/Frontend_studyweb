<template>
    <MenuComponent />
    <div class="main-screen">
        <router-view></router-view>
    </div>
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
.main-screen {
    height: 100%;
}
</style>
