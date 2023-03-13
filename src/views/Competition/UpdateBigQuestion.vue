<template>
    <div>
        <BigQuestionComponent :type="2" />
        <div class="list-button">
            <button class="button button-next" @click="back">Trở lại</button>
        </div>
    </div>
</template>
<script>
import BigQuestionComponent from '@/components/Competition/BigQuestionComponent.vue';

export default {
    name: "UpdateBigQuestion",
    methods: {
        methods: {
            back() {
                this.$emit("back");
            },
        }
    },
    components: { BigQuestionComponent }
}
</script>
<style>
.button {
    margin-left: 2px;
    margin-top: 2px;
    margin-bottom: 15px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
}

.button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>