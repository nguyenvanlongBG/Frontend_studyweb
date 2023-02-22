<template>
    <div class="references">
        <span class="title-mission">Nhiệm vụ</span>
        <div class="filter-test-mission">
            <div class="title-complete">{{ isComplete?'Hoàn thành': 'Chưa hoàn thành' }}</div>
            <button class="complete-button" @click="filterComplete(1)">
                <i :class="'fa-solid fa-check' + (isComplete ? ' green-color' : '')"></i>
            </button>
            <button class="complete-button" @click="filterComplete(0)" :style="!isComplete ? styleObject : null">
                <i :class="'fa-solid fa-xmark' + (!isComplete ? ' red-color' : '')"></i>
            </button>
        </div>
        <div class="special-box-items" v-for="(box, index) in tests" :key="index">
            <SpecialCardComponent v-for="card in box" :type="card.type" :card="card" :key="card.id" />
        </div>
        <paginate :page-count="2" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'Prev'"
            :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'"
            :active-class="'active-class'">
        </paginate>
    </div>
</template>
<script>
import { ref } from 'vue';
import SpecialCardComponent from './SpecialCardComponent.vue';
export default {
    name: "ReferencesTabComponent",
    components: { SpecialCardComponent },
    props: ['category'],
    setup() {
        const isComplete = ref(false)
        const styleObject = ref({
            "box-shadow": "0 5px #666",
            "transform": "translateY(4px)",
        })

        return {
            isComplete, styleObject
        }
    },
    mounted() {
        console.log(this.category);
        this.handleGetData()
    },
    methods: {
        handleGetData() {
            if (this.category == 2) {
                this.cards = this.tests
            }
            if (this.category == 3) {
                this.cards = this.documents
            }
        },
        filterComplete(type) {
            if (type) {
                this.isComplete = true
            } else {
                this.isComplete = false
            }
        }
    },
    data() {
        return {
            cards: [],
            tests: [
                [
                    { id: 1, name: "Hàm số", type: 2, stars: 5 }, { id: 2, type: 1, name: "Bất phương trình", stars: 5 },
                    { id: 3, type: 2, name: "Hình học không gian", stars: 5 }, { id: 4, type: 1, name: "Hình học giải tích", stars: 5 },
                    { id: 5, type: 2, name: "Hình học giải tích", stars: 5 }
                ],
                [
                    { id: 1, type: 2, name: "Hàm số", stars: 5 }, { id: 2, type: 2, name: "Bất phương trình", stars: 5 },
                    { id: 3, type: 2, name: "Hình học không gian", stars: 5 }, { id: 4, type: 2, name: "Hình học giải tích", stars: 5 },
                    { id: 5, type: 2, name: "Hình học giải tích", stars: 5 }
                ]],
            documents: [[
                { id: 1, name: "Hàm số", stars: 5 }, { id: 2, name: "Bất phương trình", stars: 5 },
                { id: 3, name: "Hình học không gian", stars: 5 }, { id: 4, name: "Hình học giải tích", stars: 5 },
                { id: 5, name: "Hình học giải tích", stars: 5 }
            ],
            [
                { id: 1, name: "Hàm số", stars: 5 }, { id: 2, name: "Bất phương trình", stars: 5 },
                { id: 3, name: "Hình học không gian", stars: 5 }, { id: 4, name: "Hình học giải tích", stars: 5 },
                { id: 5, name: "Hình học giải tích", stars: 5 }
            ]]
        }
    }
}
</script>
<style>
.references {
    flex: 7;
    background-color: #dfdcdc;
    padding: 15px;
}

.title-mission {
    font-weight: bold;
    font-size: 25px;
}

.filter-test-mission {
    display: flex;
    justify-content: flex-end;
}

.title-complete {
    font-weight: bold;
    font-size: 25px;
    margin-right: 5px;
}

.red-color {
    color: red;
}

.green-color {
    color: green;
}

.complete-button {
    display: flex;
    width: 35px;
    padding-left: 5px;
    padding-right: 5px;
    background-color: #222;
    border: 2px solid #ea4f4c;
    color: white;
    border-radius: 5px;
    box-shadow: 0 8px #999;
    justify-content: center;
    align-items: center;
    font-size: 20px;
    cursor: pointer;
}

.complete-button:active {
    box-shadow: 0 5px #666;
    background-color: #dfdcdc;
    color: #222;
    transform: translateY(4px);
}

.special-box-items {
    display: flex;
    margin-top: 25px;
}

.pagination {
    display: flex;
    justify-content: center;
}

@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>