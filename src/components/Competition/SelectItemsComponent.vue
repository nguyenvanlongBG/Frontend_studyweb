<template>
    <div>
        <div class="container-select-items">
            <h2 class="title-select">Hãy chọn cho mình 6 phép toán để vượt qua thử thách nhé</h2>
            <div class="choice-character-magic">
                <div class="box-button-choice">
                    <div class="button-choice-character">
                        <div class="character-magic box-choice-character-magic">
                            +
                        </div>
                    </div>
                    <div class="adjust-number-character">
                        <i class="fa-sharp fa-solid fa-angle-left icon-adjust-number" @click="changeNumber(0, -1)"
                            :style="totalSelect - 1 >= 0 && selected[0] - 1 >= 0 ? {} : { visibility: 'hidden' }"></i>
                        <div class="adjust-number">{{ selected[0] }}</div>
                        <i class=" fa-sharp fa-solid fa-angle-right icon-adjust-number" @click="changeNumber(0, 1)"
                            :style="totalSelect + 1 <= totalCharacter ? {} : { visibility: 'hidden' }"></i>
                    </div>
                </div>
                <div class="box-button-choice">
                    <div class="button-choice-character">
                        <div class="character-magic box-choice-character-magic">
                            -
                        </div>
                    </div>
                    <div class="adjust-number-character">
                        <i class="fa-sharp fa-solid fa-angle-left icon-adjust-number" @click="changeNumber(1, -1)"
                            :style="totalSelect - 1 >= 0 && selected[1] - 1 >= 0 ? {} : { visibility: 'hidden' }"></i>
                        <div class="adjust-number">{{ selected[1] }}</div>
                        <i class="fa-sharp fa-solid fa-angle-right icon-adjust-number" @click="changeNumber(1, 1)"
                            :style="totalSelect + 1 <= totalCharacter ? {} : { visibility: 'hidden' }"></i>
                    </div>
                </div>
                <div class="box-button-choice">
                    <div class="button-choice-character">
                        <div class="character-magic box-choice-character-magic">
                            x
                        </div>
                    </div>
                    <div class="adjust-number-character">
                        <i class="fa-sharp fa-solid fa-angle-left icon-adjust-number" @click="changeNumber(2, -1)"
                            :style="totalSelect - 1 >= 0 && selected[2] - 1 >= 0 ? {} : { visibility: 'hidden' }"></i>
                        <div class="adjust-number">{{ selected[2] }}</div>
                        <i class="fa-sharp fa-solid fa-angle-right icon-adjust-number" @click="changeNumber(2, 1)"
                            :style="totalSelect + 1 <= totalCharacter ? {} : { visibility: 'hidden' }"></i>
                    </div>
                </div>
                <div class="box-button-choice">
                    <div class="button-choice-character">
                        <div class="character-magic box-choice-character-magic">
                            :
                        </div>
                    </div>
                    <div class="adjust-number-character">
                        <i class="fa-sharp fa-solid fa-angle-left icon-adjust-number" @click="changeNumber(3, -1)"
                            :style="totalSelect - 1 >= 0 && selected[3] - 1 >= 0 ? {} : { visibility: 'hidden' }"></i>
                        <div class="adjust-number">{{ selected[3] }}</div>
                        <i class="fa-sharp fa-solid fa-angle-right icon-adjust-number" @click="changeNumber(3, 1)"
                            :style="totalSelect + 1 <= totalCharacter ? {} : { visibility: 'hidden' }"></i>
                    </div>
                </div>
            </div>
            <div class="action-select">
                <button class="submit-select" @click="challengeFinal">
                    Submit
                </button>
            </div>
        </div>
</div>
</template>
<script>
import { ref } from 'vue';

export default {
    name: "SelectItemsComponent",
    components: {},
    setup() {
        const selected = ref([0, 0, 0, 0]);
        const checkError = ref([false, false, false, false]);
        const totalSelect = ref(0);
        const doFinal = ref(false)
        return {
            selected,
            checkError,
            totalSelect,
            doFinal
        };
    },
    data() {
        return {
            totalCharacter: 5
        };
    },
    methods: {
        changeNumber(category, number) {
            this.selected[category] += number;
            this.totalSelect += number;
        },
        challengeFinal() {
            this.$emit('final', true)
        }
    },

}
</script>
<style>
.container-select-items {
    background-color: #383636;
    padding: 5px;
    min-height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.title-select {
    color: white;
    margin-left: 25px;
}

.choice-character-magic {
    display: flex;
    justify-content: space-around;
    margin-top: 25px;
}

.box-choice-character-magic {
    font-size: 90px;
    display: flex;
    align-items: center;
}

.box-button-choice {
    width: 200px;
    height: 200px;
    padding: 5px;
}



.button-choice-character {
    display: flex;
    height: 100%;
    box-sizing: border-box;
    justify-content: center;
    font-family: 'Kalam', cursive;
    margin-top: 2px;
    box-shadow: 3px 10px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: rgb(249, 245, 245);
    color: rgb(15, 14, 14);
    font-weight: bold;
    text-align: center;
    justify-content: center;
    text-decoration: none;
}

.action-select {
    display: flex;
    justify-content: flex-end;
}

.submit-select {
    right: 15px;
    margin-left: 2px;
    font-family: 'Kalam', cursive;
    margin-top: 25px;
    margin-right: 15px;
    margin-bottom: 15px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    border: 2px solid #ea4f4c;
    background-color: rgb(249, 245, 245);
    color: rgb(15, 14, 14);
    font-weight: bold;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
}

.submit-select:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.adjust-number-character {
    margin-top: 15px;
    display: flex;
    justify-content: center;
    /* justify-content: space-between; */
}

.adjust-number {
    font-size: 15px;
    color: white;
}

.icon-adjust-number {
    color: white;
    margin-right: 15px;
    margin-left: 15px;
    cursor: pointer;
}

.icon-adjust-number:hover {
    color: #ea4f4c;
}
</style>