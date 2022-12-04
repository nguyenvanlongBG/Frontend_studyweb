<template>
  <div class="container">
    <!-- Giao diện chọn các bộ đề -->
    <ModalCreateTest v-if="modalCreateTest.visible" @close="modalCreateTest.visible = false">

    </ModalCreateTest>
    <div class="header-tests">
      <h1 class="myListTestTitle">{{ title }}</h1>
      <div class="list-tool-button-test">
        <button class="tool-button-test" @click="createTest" v-if="hasRole" id="create">
          Create Test
        </button>
        <button class="tool-button-test" @click="getMyListTests" :disabled="hasRole" id="doingTest">
          Đang thi
        </button>
        <button class="tool-button-test" @click="getMyListTests" :disabled="displayButton" id="history">
          Lịch sử
        </button>
        <button class="tool-button-test" @click="getMyListTests" v-if="hasMyTests" id="myListTest">
          Bộ đề của tôi
        </button>
        <button class="tool-button-test" @click="getMyListTests" :disabled="!hasMyTests" id="all">
          Tất cả
        </button>
      </div>


    </div>
    <div class="grid-container">
      <TestComponent :test="test" v-for="test in data" :key="test.id" />





    </div>








  </div>
</template>
<script>
import { getTests } from "../services/test"
import ModalCreateTest from "../components/ModalCreateTest.vue"
import TestComponent from "../components/Test/TestComponent.vue"

export default {
  name: 'TestsComponent',
  components: {
    ModalCreateTest,
    TestComponent,
  },
  data() {
    return {
      data: [],
      modalCreateTest: {
        visible: false,
      },
      hasMyTests: false,
      hasRole: false,
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
      // let responseTests
      // if (!this.myTests) {
      //   const response = await getTests()
      //   responseTests = response.data
      // } else {
      //   const response = await getTestsByIdUser(0)
      //   responseTests = response.data
      // }
      const response = await getTests(this.filter)
      this.data = response.data
      var myListTest = document.getElementById("myListTest");
      myListTest.classList.add("");
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
  display: block;
  margin-left: auto;
  margin-top: 2px;
  height: 35px;
  border-radius: 5px;
  border: 2px solid #ea4f4c;
  background-color: #222;
  color: white;
  text-align: center;
  justify-content: center;
  text-decoration: none;
}

.tool-button-test-click {
  display: block;
  margin-left: auto;
  margin-top: 2px;
  height: 35px;
  border-radius: 5px;
  border: 2px solid #ea4f4c;
  background-color: #222;
  color: white;
  text-align: center;
  justify-content: center;
  text-decoration: none;
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