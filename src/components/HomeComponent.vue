<template>
  <div v-for="i in data" :key="i">
    <span>{{i}}</span>
  </div>
</template>
<script>
export default {
  data() {
    const data = []
    return {
      data
    }
  },
  methods: {
    getData() {
      console.log(this.data)
    },
  },
  mounted() {
    this.getData()
  }
}

</script>
