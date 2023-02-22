<template>
    <div class="references">
        <span class="title-special">{{ category== 2 ? 'Bộ đề thi' : 'Tài liệu tham khảo' }}</span>
        <div class="special-box-items" v-for="(box, index) in cards" :key="index">
            <SpecialCardComponent v-for="card in box" :type="2" :card="card" :key="card.id" />
        </div>
        <paginate :page-count="2" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'Prev'"
            :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'"
            :active-class="'active-class'">
        </paginate>
    </div>
</template>
<script>
import SpecialCardComponent from './SpecialCardComponent.vue';
export default {
    name: "ReferencesTabComponent",
    components: { SpecialCardComponent },
    props: ['category'],
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
        }
    },
    data() {
        return {
            cards: [],
            tests: [
                [
                    { id: 1, name: "Hàm số", stars: 5 }, { id: 2, name: "Bất phương trình", stars: 5 },
                    { id: 3, name: "Hình học không gian", stars: 5 }, { id: 4, name: "Hình học giải tích", stars: 5 },
                    { id: 5, name: "Hình học giải tích", stars: 5 }
                ],
                [
                    { id: 1, name: "Hàm số", stars: 5 }, { id: 2, name: "Bất phương trình", stars: 5 },
                    { id: 3, name: "Hình học không gian", stars: 5 }, { id: 4, name: "Hình học giải tích", stars: 5 },
                    { id: 5, name: "Hình học giải tích", stars: 5 }
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