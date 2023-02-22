<template>
    <div>
        <div class="container-magic-math" v-if="statusDoFinal">
            <div class="question-magic">
                <div class="content-magic number-magic">
                    <div>
                        9
                    </div>
                </div>
                <div class="content-magic box-character-magic">
                    ?
                </div>
                <div class="content-magic number-magic">
                    <div>
                        2
                    </div>
                </div>
            </div>
            <h2>Hãy chọn phép toán</h2>
            <div class="choice-character-magic">
                <div class="box-button-choice">
                    <div class="button-choice-character">
                        <div class="character-magic box-choice-character-magic">
                            +
                        </div>
                    </div>
                </div>
                <div class="box-button-choice">
                    <div class="button-choice-character">
                        <div class="character-magic box-choice-character-magic">
                            -
                        </div>
                    </div>
                </div>
                <div class="box-button-choice">
                    <div class="button-choice-character">
                        <div class="character-magic box-choice-character-magic">
                            x
                        </div>
                    </div>
                </div>
                <div class="box-button-choice">
                    <div class="button-choice-character">
                        <div class="character-magic box-choice-character-magic">
                            :
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <SelectItemsComponent @final="doFinal" v-else />
</div>
</template>
<script>
import { ref } from 'vue';
import SelectItemsComponent from './SelectItemsComponent.vue';

export default {
    name: "MagicMathComponent",
    components: { SelectItemsComponent },
    setup() {
        const statusDoFinal = ref(false)
        return {
            statusDoFinal
        }
    },
    methods: {
        doFinal() {
            this.statusDoFinal = true
        }
    }
}

</script>
<style scoped>
.container-magic-math {
    background-color: #383636;
    min-height: 600px;
}

.question-magic {
    display: flex;
}

.content-magic {
    display: flex;
    padding: 5px;
    align-items: center;
    justify-content: center;
    text-align: center;
    font-family: 'Niconne', cursive;
    font-weight: 700;
    text-shadow: 1px 1px 0px #eb452b,
        2px 2px 0px #efa032,
        3px 3px 0px #46b59b,
        4px 4px 0px #017e7f,
        5px 5px 0px #052939,
        6px 6px 0px #c11a2b,
        7px 7px 0px #c11a2b,
        8px 8px 0px #c11a2b,
        9px 9px 0px #c11a2b;
}

.character-magic {
    font-family: 'Niconne', cursive;
    font-weight: 700;
    text-shadow: 1px 1px 0px #eb452b,
        2px 2px 0px #efa032,
        3px 3px 0px #46b59b,
        4px 4px 0px #017e7f,
        5px 5px 0px #052939,
        6px 6px 0px #c11a2b,
        7px 7px 0px #c11a2b,
        8px 8px 0px #c11a2b,
        9px 9px 0px #c11a2b;
}

.number-magic {
    width: 40%;
    font-size: 90px;
    animation: 2s ease-in-out alternate swingViewport;
    overflow-x: hidden scroll;
}

@keyframes swingViewport {
    from {
        transform: translateX(150%);
    }

    to {
        transform: translateX(0px);
    }
}

.box-character-magic {
    width: 200px;
    height: 200px;
    font-size: 90px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid #017e7f;
}

.choice-character-magic {
    display: flex;
    justify-content: space-around;
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
    cursor: pointer;
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

.button-choice-character:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}
</style>