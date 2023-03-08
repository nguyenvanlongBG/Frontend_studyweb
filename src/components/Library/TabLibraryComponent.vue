<template>
    <div class="references">
        <div class="header-library">
            <span class="title-library">{{ category == 1 ? 'Tài liệu tham khảo' : 'Tài liệu video' }}</span>
            <button class="button">Tạo tài liệu</button>
        </div>
        <VueMultiselect :class="colorSelect" v-model="filterChapters" open-direction="bottom"
            :options="chapters ? chapters : []" :multiple="true" :close-on-select="false" :clear-on-select="false"
            :preserve-search="true" placeholder="Chương" label="name" track-by="name" :preselect-first="false"
            @select="selectItems" @remove="removeItems">
        </VueMultiselect>
        <div class="grid-box-items" v-for="(cards, index1) in boxs" :key="index1">
            <SpecialCardComponent v-for="(card, index2) in cards" :type="2" :card="card" :key="index2">
                <template v-slot:content-card>
                    <div class="information-user">
                        <div class="avatar">
                            <a href="" class="circle">
                                <img width="45" height="45"
                                    src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
                            </a>
                        </div>
                        <div class="information">
                            <span>
                                Nguyễn Văn A
                            </span>
                            <span>
                                <i class="fa-solid fa-medal"></i>
                            </span>
                        </div>
                    </div>
                </template>
            </SpecialCardComponent>
        </div>
        <paginate :page-count="2" :page-range="3" :margin-pages="2" :click-handler="clickCallback" :prev-text="'Prev'"
            :next-text="'Next'" :container-class="'pagination'" :page-class="'page-item'" :active-class="'active-class'">
        </paginate>
    </div>
</template>
<script>
import SpecialCardComponent from '../User/SpecialCardComponent.vue';
import VueMultiselect from 'vue-multiselect';
import Paginate from 'vuejs-paginate-next';
export default {
    name: "TabLibraryComponent",
    components: { SpecialCardComponent, VueMultiselect, Paginate },
    props: ['category'],
    mounted() {
        console.log(this.category);
        this.handleGetData()
    },
    methods: {
        handleGetData() {
            if (this.category == 1) {
                this.boxs = this.tests
            }
            if (this.category == 2) {
                this.boxs = this.documents
            }
        }
    },
    data() {
        return {
            boxs: [],
            chapters: [{ id: 1, name: "Tích phân" }, { id: 2, name: "Hàm số" }, { id: 3, name: "Hình học" }, { id: 4, name: "Bất đẳng thức" }],
            tests: [[
                { id: 1, name: "Hàm số", stars: 5 }, { id: 2, name: "Bất phương trình", stars: 5 },
                { id: 3, name: "Hình học không gian", stars: 5 }, { id: 4, name: "Hình học giải tích", stars: 5 },
                { id: 5, name: "Hình học giải tích", stars: 5 }],
            [
                { id: 1, name: "Hàm số", stars: 5 }, { id: 2, name: "Bất phương trình", stars: 5 },
                { id: 3, name: "Hình học không gian", stars: 5 }, { id: 4, name: "Hình học giải tích", stars: 5 },
                { id: 4, name: "Hình học giải tích", stars: 5 }
            ]
            ],
            documents: [
                [{ id: 1, name: "Hàm số", stars: 5 }, { id: 2, name: "Bất phương trình", stars: 5 },
                { id: 3, name: "Hình học không gian", stars: 5 }, { id: 4, name: "Hình học giải tích", stars: 5 },
                { id: 5, name: "Hình học giải tích", stars: 5 }],
                [{ id: 6, name: "Hình học giải tích", stars: 5 },
                { id: 1, name: "Hàm số", stars: 5 }, { id: 2, name: "Bất phương trình", stars: 5 },
                { id: 3, name: "Hình học không gian", stars: 5 }, { id: 4, name: "Hình học giải tích", stars: 5 }],
                [
                    { id: 5, name: "Hình học giải tích", stars: 5 }, { id: 5, name: "Hình học giải tích", stars: 5 }]
            ]
        }
    }
}
</script>
<style>
.references {
    background-color: #dfdcdc;
    padding: 15px;
}

.header-library {
    display: flex;
    justify-content: space-between;
}

.grid-box-items {
    display: grid;
    grid-template-columns: auto auto auto auto auto;
    margin-top: 25px;
}

.title-library {
    font-size: 25px;
    font-weight: bold;
}

.button {
    display: block;
    padding: 3px;
    margin-left: 2px;
    font-family: 'Kalam', cursive;
    margin-top: 2px;
    /* margin-right: 15px; */
    margin-bottom: 15px;
    height: 35px;
    box-shadow: 0 8px #999;
    border-radius: 5px;
    color: white;
    /* border: 2px solid #ea4f4c; */
    background-color: #222;
    border: 2px solid #ea4f4c;
    font-weight: bold;
    text-align: center;
    justify-content: center;
    text-decoration: none;
    cursor: pointer;
}

.button:active {
    box-shadow: 0 5px #666;
    transform: translateY(4px);
}

.pagination {
    display: flex;
    justify-content: center;
}

.pagination {
    margin-top: 25px
}

@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import url('vue-multiselect/dist/vue-multiselect.css');
</style>