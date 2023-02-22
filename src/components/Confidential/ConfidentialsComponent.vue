<template>
    <CreateConfidentialComponent v-if="isCreate" @back="close" />
    <SeeConfidentialComponent v-if="isSeeDetail" @back="closeSee" />
    <div class="container">
        <div class="header-confidentials">
            <button class="write-confidential" @click="writeStatus()">
                Viết đôi lời
            </button>
        </div>
        <div class="grid-confidentials">
            <div class="grid-item-confidential" @click="seeDetail">
                <NoteComponent>
                    <template v-slot:note>
                        <div class="title-note-confidential">
                            Ok Bro
                        </div>
                    </template>
                </NoteComponent>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import NoteComponent from '../common/NoteComponent.vue';
import CreateConfidentialComponent from './CreateConfidentialComponent.vue';
import SeeConfidentialComponent from './SeeConfidentialComponent.vue';
export default {
    name: "ConfidentialsComponent",
    components: {
        NoteComponent,
        CreateConfidentialComponent,
        SeeConfidentialComponent
    },
    setup() {
        const isCreate = ref(false)
        const isSeeDetail = ref(false)
        return {
            isCreate, isSeeDetail
        }
    },
    methods: {
        writeStatus() {
            this.isCreate = true
        },
        seeDetail() {
            this.isSeeDetail = true
        },
        close() {
            this.isCreate = false
        },
        closeSee() {
            this.isSeeDetail = false
        }
    }
}

</script>
<style>
.container {
    margin: 0 15%;
    position: relative;
}

.header-confidentials {
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.write-confidential {
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

.write-confidential:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.grid-confidentials {
    display: flex;
    flex-wrap: wrap;
    padding: 10px;
    padding-top: 0px;
    margin-top: 2px;
    box-sizing: border-box;
    border-radius: 20px;
    justify-content: space-between;
}

.grid-item-confidential {
    display: flex;
    box-sizing: border-box;
    width: 33%;
    color: white;
    border-radius: 10px;
    cursor: pointer;
    padding-top: 10px;
    font-size: 20px;
    text-align: center;
    text-decoration: none;
}

@import url('https://fonts.googleapis.com/css2?family=Kalam&display=swap');

.title-note-confidential {
    font-family: 'Kalam', cursive;
    font-size: 16px;
}
</style>