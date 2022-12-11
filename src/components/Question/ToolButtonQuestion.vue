<template>
    <div class="action-question">
        <button class="tool-button-test" :style="pressUpdate ? styleObject : null" @click="updateQuestion"
            v-if="hasRole">
            Sửa
        </button>
        <button class="tool-button-test" @click="deleteQuestion" v-if="hasRole">
            Xóa
        </button>
    </div>
</template>
<script>
export default {
    name: "ToolButtonQuestion",
    props: ['hasRole', 'idQuestion'],
    data() {
        return {
            pressUpdate: false,
            styleObject: {
                "box-shadow": "0 5px #666",
                "transform": "translateY(4px)"
            }
        }
    },
    methods: {
        updateQuestion() {
            this.pressUpdate = true
            this.$emit("update")
        },
        deleteQuestion() {
            this.pressUpdate = false
            this.$emit("delete")
        }
    }
}
</script>
<style>
.tool-button-test {
    margin-left: 2px;
    margin-top: 2px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: #222;
    color: white;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.tool-button-test:active {

    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>