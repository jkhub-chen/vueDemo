<template>
  <section>
    <p @click="toPage">去登录</p>
    <input type="number" v-model.number="num" placeholder="请输入"/>
    <p>{{num}}</p>
    <btn :toNum="num"></btn>
  </section>
</template>

<script>
  import Btn from '../components/btn'
  import { Toast, Indicator } from 'mint-ui';

  export default {
    data () {
      return {
        num: '42423',
        loginToken: 'dG9rZW58MTgwNjk3ODI0OTB8MTUyNDgwNTgwNg==',
        tides: '8412722033162729978',
        transferId: '3435623',
        transferOrderNo: '3435'
      }
    },
    created () {
      // this.http.post('/cust/info/perDetailInfo').then(data => {
      //   console.log(data)
      // });
    },
    components: { Btn },
    methods: {
      toPage () {
        this.$store.dispatch('setUserInfo', '陈国栋')
        this.$router.push({path: '/login',query: {id: 101, name: 'chen'}})
      }
    }
  }
</script>
