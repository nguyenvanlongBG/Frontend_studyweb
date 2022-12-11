<template>
    <div class="loading-overlay" v-if="isLoading">
        <div class="frame">
            <button @click="close()" class="close">X</button>
            <h2>{{ content }}</h2>
            <div class="confirm-buttons">
                <button class="button-modal-confirm" @click="close">
                    Quay lại
                </button>
                <button class="button-modal-confirm" @click="confirm">
                    OK
                </button>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    name: 'LoadingComponent',
    props: ['isLoading']

}
</script>
<style>
.loading-overlay {
    /* top: 0px;
    left: 0px;
    bottom: 0px;
    right: 0px; */
    display: flex;
    /* flex-direction: row; */
    justify-content: center;
    align-items: center;
    color: white;
    background-color: #000000da;
    z-index: 10;

}

.frame {
    position: relative;
    width: 50%;
    height: 33%;
    text-align: center;
    /* align-items: center; */
    border: 2px solid #dd4040;
}

.confirm-buttons {
    position: absolute;
    margin-top: 2px;
    display: flex;
    justify-content: flex-end;
    bottom: 5px;
    right: 5px;
}

.button-modal-confirm {
    margin-left: 2px;
    margin-top: 2px;
    margin-bottom: 6px;
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

.button-modal-confirm:active {

    box-shadow: 0 5px #666;
    transform: translateY(4px);
}



.close {
    position: absolute;
    right: -6px;
    top: -6px;
    display: flex;
    justify-content: center;
    align-items: center;
    /* margin: 30px 0 0 2px; */
    width: 20px;
    height: 20px;
    border-radius: 50%;
    cursor: pointer;
    background-color: blueviolet;
}
</style>