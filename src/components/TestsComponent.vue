<template>
  <div class="container">
    <!-- Giao diện chọn các bộ đề -->
    <ModalCreateTest v-if="modalCreateTest.visible" @close="modalCreateTest.visible = false">

    </ModalCreateTest>
    <div class="header-tests">
      <h1 class="myListTestTitle">{{ title }}</h1>
      <div class="list-tool-button-test">
        <button class="tool-button-test" @click="createTest" v-if="hasRole" id="create">
          Tạo đề thi
        </button>
        <button class="tool-button-test" @click="getMyListTests" :disabled="hasRole" id="doingTest">
          Chưa hoàn thành
        </button>
        <button class="tool-button-test" @click="getMyListTests" :disabled="hasRole" id="doingTest">
          Đã hoàn thành
        </button>
        <button class="tool-button-test" @click="getMyListTests" id="myListTest">
          Bộ đề của tôi
        </button>
        <button class="tool-button-test" @click="getMyListTests" :disabled="!hasMyTests" id="all">
          Bộ đề khác
        </button>
      </div>
    </div>
    <div class="grid-container">
      <TestComponent :test="test" v-for="test in data" :key="test.id" :type="type" />
    </div>
  </div>
</template>
<script>
import { getTests } from "../services/test"
import ModalCreateTest from "../components/ModalCreateTest.vue"
import TestComponent from "../components/Test/TestComponent.vue"
import { ref } from "vue"

export default {
  name: 'TestsComponent',
  components: {
    ModalCreateTest,
    TestComponent,
  },
  setup() {
    const type = ref(0)
    return {
      type
    }
  },
  data() {
    return {
      data: [],
      modalCreateTest: {
        visible: false,
      },
      hasMyTests: false,
      hasRole: true,
      displayButton: true,
      filter: {},
      title: "Tất cả bộ đề"
    }
  },
  mounted() {
    this.getListTest()
  },
  methods: {
    async getListTest() {
      const response = await getTests(this.filter)
      this.data = response
    },
    createTest() {
      this.modalCreateTest.visible = true
    },
    getMyListTests() {
      this.hasMyTests = true
      this.displayButton = false
      this.filter = {}
      // this.filter.user_id = 2
      this.getListTest()
    }
  }
}
</script>
<style>
.container {
  margin: 0 15%;
  position: relative;

}

.myListTestTitle {
  margin-top: 5px;
  margin-bottom: 5px;
  margin-left: 15px;
}



.list-tool-button-test {
  display: flex;
}

.tool-button-test {
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

.tool-button-test:active {

  box-shadow: 0 5px #666;
  transform: translateY(4px);
}

.share {
  font-size: 22px;
}

.grid-container {
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  padding-top: 0px;
  margin-top: 2px;
  box-sizing: border-box;
  border-radius: 20px;

}

.grid-item {
  box-sizing: border-box;
  background-color: #222;
  border: 2px solid #ea4f4c;
  width: 24.5%;
  color: white;
  border-radius: 10px;
  cursor: pointer;
  padding: 20px;
  padding-top: 10px;
  font-size: 20px;
  text-align: center;
  margin-left: 2px;
  margin-top: 5px;
  text-decoration: none;
}

.header-exam {
  display: flex;
  justify-content: space-between;
}
</style>