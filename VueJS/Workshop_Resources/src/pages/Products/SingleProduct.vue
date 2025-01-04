<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  }
}
</script>

<template>
  <h1>SingleProduct {{id}}</h1>
</template>

<style scoped>

</style>