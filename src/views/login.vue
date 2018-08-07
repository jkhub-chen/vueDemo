<template>
  <section>
    <p @click="toPage">登录</p>
  </section>
</template>

<script>
  export default {
    data () {
      return {}
    },
    created () {},
    methods: {
      toPage () {
        this.$router.push('/home')
      }
    }
  }
</script>

<style scoped></style>
