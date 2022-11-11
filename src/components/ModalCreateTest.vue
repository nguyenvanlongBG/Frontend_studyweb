<template>
    <div class="modal-answer-overlay" style="overflow-y: scroll">
        <div>
            <label for="nameTest">
                Tên kì thi
            </label>
            <input id="nameTest" type="text" />
            <label for="timeStart">
                Thời gian bắt đầu
            </label>
            <input id="timeStart" type="time" />
            <label for="timeEnd">
                Thời gian kết thúc
            </label>
            <input id="timeEnd" type="time" />
        </div>
        <button @click="close()" class="close">X</button>


    </div>
</template>

<script>
export default {
    name: 'ModalCreateTest',
    data() {

    },
    methods: {
        close() {
            this.$emit("close")
        }
    }
}

</script>
<style>
.modal-answer-overlay {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #000000da;
    z-index: 10;
}


.image-solution img {

    /* margin-top: 20%;
    margin-left: 20%;
    margin-right: 20%; */
    text-align: center;
    background-color: white;
    height: 800px;
    width: 800px;

    padding: 20px 0;
    border-radius: 10px;
}

.close {
    display: flex;
    justify-content: center;
    margin: 30px 0 0 2px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: blueviolet;
}
</style>