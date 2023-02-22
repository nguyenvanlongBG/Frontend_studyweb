<template>
    <div class="all-test-reference">
        <div>
            <span class="title-special">Đề thi nổi bật</span>
            <div class="special-box-items">
                <SpecialCardComponent v-for="card in cards" :type="1" :card="card" :key="card.id" />
            </div>
        </div>
        <div>
            <span class="title-special">Tài liệu nổi bật</span>
            <div class="special-box-items">
                <SpecialCardComponent v-for="card in cards" :type="1" :card="card" :key="card.id" />
            </div>
        </div>
    </div>
</template>
<script>
import SpecialCardComponent from './SpecialCardComponent.vue';

export default {
    name: "SpecialTabComponent",
    components: { SpecialCardComponent },
    data() {
        return {
            cards: [
                { id: 1, name: "Đề thi hàm số", stars: 5 }, { id: 2, name: "Đề thi bất phương trình", stars: 5 },
                { id: 3, name: "Đề thi hình học không gian", stars: 5 }, { id: 4, name: "Đề thi hình học giải tích", stars: 5 },
                { id: 5, name: "Đề thi hình học giải tích", stars: 5 }
            ]
        }
    }
}
</script>
<style>
.all-test-reference {
    flex: 7;
    background-color: #dfdcdc;
    padding: 15px;
}

.title-special {
    font-size: 25px;
    font-weight: bold;
}

.special-box-items {
    display: flex;
    margin-top: 25px;
}
</style>