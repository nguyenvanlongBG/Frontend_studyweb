<template>
  <div class="container">
    <!-- Giao diện chọn các bộ đề -->
    <ModalCreateTest v-if="modalCreateTest.visible" @close="modalCreateTest.visible = false">

    </ModalCreateTest>
    <button class="create-test" @click="createTest">
      Create Test
    </button>
    <div class="grid-container">
      <RouterLink :to="{ name: 'TestInfo', params: { idTest: 1 } }" class="grid-item" v-for="exam in data"
        :key="exam.id">
        <div class="header-exam">
          <div class="information-user">
            <!-- Khối thông tin User -->
            <div class="avatar">
              <a href="" class="circle">
                <img width="64" height="64"
                  src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
              </a>
            </div>

            <div class="information">
              <!-- Thông tin tên, giờ post bài -->
              <span>
                Nguyễn Văn A
              </span>
              <span>
                10/01/2022
              </span>
            </div>
          </div>
          <!-- Khối thông tin người tạo đề thi -->
        </div>
        <div>
          Kì thi: {{ exam.name }}
        </div>
        <div>
          Mã đề thi: {{ exam.id }}
        </div>
        <div>
          Số câu hỏi
        </div>
        <div>
          Thời gian
        </div>
        <div>
          Thời gian mở đề: {{ exam.time_start }}
        </div>
        <div>
          Ghi chú
        </div>
        <div>
          Tên kỳ thi
        </div>
        <div>
          Nút bấm làm bài
        </div>
        <div>
          Số học sinh tham gia
        </div>

      </RouterLink>

      <RouterLink :to="{ name: 'TestInfo', params: { idTest: 1 } }" class="grid-item" v-for="exam in data"
        :key="exam.id">
        <div class="header-exam">
          <div class="information-user">
            <!-- Khối thông tin User -->
            <div class="avatar">
              <a href="" class="circle">
                <img width="64" height="64"
                  src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
              </a>
            </div>

            <div class="information">
              <!-- Thông tin tên, giờ post bài -->
              <span>
                Nguyễn Văn A
              </span>
              <span>
                10/01/2022
              </span>
            </div>
          </div>
          <!-- Khối thông tin người tạo đề thi -->
        </div>
        <div>
          Kì thi: {{ exam.name }}
        </div>
        <div>
          Mã đề thi: {{ exam.id }}
        </div>
        <div>
          Số câu hỏi
        </div>
        <div>
          Thời gian
        </div>
        <div>
          Thời gian mở đề: {{ exam.time_start }}
        </div>
        <div>
          Ghi chú
        </div>
        <div>
          Tên kỳ thi
        </div>
        <div>
          Nút bấm làm bài
        </div>
        <div>
          Số học sinh tham gia
        </div>

      </RouterLink>

      <RouterLink :to="{ name: 'TestInfo', params: { idTest: 1 } }" class="grid-item" v-for="exam in data"
        :key="exam.id">
        <div class="header-exam">
          <div class="information-user">
            <!-- Khối thông tin User -->
            <div class="avatar">
              <a href="" class="circle">
                <img width="64" height="64"
                  src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
              </a>
            </div>

            <div class="information">
              <!-- Thông tin tên, giờ post bài -->
              <span>
                Nguyễn Văn A
              </span>
              <span>
                10/01/2022
              </span>
            </div>
          </div>
          <!-- Khối thông tin người tạo đề thi -->
        </div>
        <div>
          Kì thi: {{ exam.name }}
        </div>
        <div>
          Mã đề thi: {{ exam.id }}
        </div>
        <div>
          Số câu hỏi
        </div>
        <div>
          Thời gian
        </div>
        <div>
          Thời gian mở đề: {{ exam.time_start }}
        </div>
        <div>
          Ghi chú
        </div>
        <div>
          Tên kỳ thi
        </div>
        <div>
          Nút bấm làm bài
        </div>
        <div>
          Số học sinh tham gia
        </div>

      </RouterLink>
      <RouterLink :to="{ name: 'TestInfo', params: { idTest: 1 } }" class="grid-item" v-for="exam in data"
        :key="exam.id">
        <div class="header-exam">
          <div class="information-user">
            <!-- Khối thông tin User -->
            <div class="avatar">
              <a href="" class="circle">
                <img width="64" height="64"
                  src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
              </a>
            </div>

            <div class="information">
              <!-- Thông tin tên, giờ post bài -->
              <span>
                Nguyễn Văn A
              </span>
              <span>
                10/01/2022
              </span>
            </div>
          </div>
          <!-- Khối thông tin người tạo đề thi -->
        </div>
        <div>
          Kì thi: {{ exam.name }}
        </div>
        <div>
          Mã đề thi: {{ exam.id }}
        </div>
        <div>
          Số câu hỏi
        </div>
        <div>
          Thời gian
        </div>
        <div>
          Thời gian mở đề: {{ exam.time_start }}
        </div>
        <div>
          Ghi chú
        </div>
        <div>
          Tên kỳ thi
        </div>
        <div>
          Nút bấm làm bài
        </div>
        <div>
          Số học sinh tham gia
        </div>

      </RouterLink>

      <RouterLink :to="{ name: 'TestInfo', params: { idTest: 1 } }" class="grid-item" v-for="exam in data"
        :key="exam.id">
        <div class="header-exam">
          <div class="information-user">
            <!-- Khối thông tin User -->
            <div class="avatar">
              <a href="" class="circle">
                <img width="64" height="64"
                  src="http://www.gravatar.com/avatar/9017a5f22556ae0eb7fb0710711ec125?s=128" />
              </a>
            </div>

            <div class="information">
              <!-- Thông tin tên, giờ post bài -->
              <span>
                Nguyễn Văn A
              </span>
              <span>
                10/01/2022
              </span>
            </div>
          </div>
          <!-- Khối thông tin người tạo đề thi -->
        </div>
        <div>
          Kì thi: {{ exam.name }}
        </div>
        <div>
          Mã đề thi: {{ exam.id }}
        </div>
        <div>
          Số câu hỏi
        </div>
        <div>
          Thời gian
        </div>
        <div>
          Thời gian mở đề: {{ exam.time_start }}
        </div>
        <div>
          Ghi chú
        </div>
        <div>
          Tên kỳ thi
        </div>
        <div>
          Nút bấm làm bài
        </div>
        <div>
          Số học sinh tham gia
        </div>

      </RouterLink>
    </div>








  </div>
</template>
<script>
import { getTests } from "../services/test"
import ModalCreateTest from "../components/ModalCreateTest.vue"
export default {
  name: 'TestsComponent',
  components: {
    ModalCreateTest
  },
  data() {
    return {
      data: [],
      modalCreateTest: {
        visible: false,

      },
    }
  },
  mounted() {
    this.getListExam()
  },
  methods: {
    async getListExam() {
      const response = await getTests()
      const responseTests = response.data
      this.data = responseTests
    },
    createTest() {
      this.modalCreateTest.visible = true
    }
  }
}
</script>
<style>
.container {
  margin: 0 15%;
  position: relative;

}

.create-test {
  display: block;
  margin-left: auto;
  margin-top: 2px;
  width: 10%;
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

.information-user {
  display: flex;
}

.information {
  display: flex;
  flex-direction: column;

}

.circle {
  display: inline-block;
  height: 64px;
  width: 64px;
  border: 4px solid rgba(200, 200, 200, 0.4);
  border-radius: 50%;
}

.circle img {
  border-radius: 50%;
}

.circle:hover {
  transition: ease-out 0.2s;
  border: 4px solid rgba(203, 31, 31, 0.25);
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