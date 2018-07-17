<template>
  <section>
    <p @click="toPage">去登录</p>
    <input type="number" v-model.number="num" placeholder="请输入"/>
    <p>{{num}}</p>
    <btn :toNum="num"></btn>

    <input type="file" id="file" @change="getPic()"/>
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
      getPic () {
        var input = document.getElementById("file");
        //读取图片数据
        var f = input.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
          var data = e.target.result;
          //加载图片获取图片真实宽度和高度
          var image = new Image();
          image.onload=function(){
            var width = image.width;
            var height = image.height;
            console.log(width+'======'+height+"====="+f.size);
          };
          image.src= data;
        };
        reader.readAsDataURL(f);
      },

      toPage () {
        this.$store.dispatch('setUserInfo', '陈国栋')
        this.$router.push({path: '/login',query: {id: 101, name: 'chen'}})
      }
    }
  }
</script>
