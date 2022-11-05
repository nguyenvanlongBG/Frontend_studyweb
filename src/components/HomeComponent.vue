<template>
  OK
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
