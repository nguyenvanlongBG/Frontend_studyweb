<template>
    <div class="modal-create-confidential">
        <div class="create-content-confidential">
            <div class="header-write-confidential">Ngày hôm nay của bạn như thế nào. Hãy chia sẻ cho mọi người nhé <i
                    class="fa-solid fa-heart pink"></i></div>
            <NoteComponent :key="0">
                <template v-slot:note>

                    <textarea placeholder="Describe yourself here..." class="title-note-confidential">
                </textarea>
                </template>
            </NoteComponent>
            <div class="end-confidentials">
                <button class="button-create-confidential" @click="back">
                    Quay lại
                </button>
                <button class="button-create-confidential">
                    Đăng bài
                </button>
            </div>
        </div>
    </div>
</template>
<script>
import NoteComponent from '../common/NoteComponent.vue';
export default {
    name: "CreateConfidentialComponent",
    components: {
        NoteComponent
    },
    methods: {
        back() {
            this.$emit('back', "Close")
        }
    }
}

</script>
<style>
.modal-create-confidential {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    color: white;
    display: flex;
    flex-direction: row;
    justify-content: center;
    background-color: #2f2e2eda;
    z-index: 100;
}

@import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');

.header-write-confidential {
    font-family: 'Kalam', cursive;
    color: rgb(225, 222, 228);
}

.pink {
    color: pink;
}

.create-content-confidential {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    width: 33%;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    padding-top: 10px;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
    z-index: 100;
}



.title-note-confidential {
    font-family: 'Kalam', cursive;
    font-size: 16px;
    width: 100%;
    color: #222;
    background: linear-gradient(180deg,
            rgb(125, 224, 246) 0%,
            rgb(125, 224, 246) 12%,
            rgb(125, 224, 246) 75%,
            rgb(125, 224, 246) 100%);
}

.end-confidentials {
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: 10px;
}

.button-create-confidential {
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
    z-index: 100;
}

.submit-confidential:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>