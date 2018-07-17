<template>
  <section class="home">
    <p @click="toPage">去登录</p>
  </section>
</template>

<script>
  import Btn from '../components/btn'
  import { Toast, Indicator } from 'mint-ui';

  export default {
    data () {
      return {}
    },
    created () {
      // this.http.post('/cust/info/perDetailInfo').then(data => {
      //   console.log(data)
      // });
    },
    components: { Btn },
    methods: {
      toPage () {
        this.$store.dispatch('setUserInfo', 'jake101')
        this.$router.push({path: '/login',query: {id: 101, name: 'chen'}})
      }
    }
  }
</script>

<style scoped>
  .home{}
  .home p{font-size: 28px}
</style>
