<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'App'
  }
</script>

<style>
  .fade-enter-active, .fade-leave-active {transition: all .2s ease}
  .fade-enter, .fade-leave-active {opacity: 0}


  /*全局样式初始化*/
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,span{margin:0;padding:0;-webkit-font-smoothing:antialiased;box-sizing:border-box}
  html,body{height:100%;-webkit-tap-highlight-color:transparent}
  body{width:100%;background-color:rgba(245,245,245,0.7);background-size:100%;font-size:28px;color:#666;line-height:1;
    font-family:"PingFang SC Light","Helvetica Neue",Helvetica ,"Microsoft Yahei", Arial,sans-serif,"Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,SimSun;
    overflow-x:hidden;-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;}
  p{margin:0;padding:0;font-weight:normal}
  a{text-decoration:none;-webkit-tap-highlight-color:transparent}
  img{border:0;width:100%;margin:0;padding:0}
  input,textarea{outline:0;font-size:28px;color:#666}
  input:-webkit-autofill,textarea:-webkit-autofill,select:-webkit-autofill{background-color:#fff !important;}
  input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{font-size:28px;color:#999}
  input:-moz-placeholder,textarea:-moz-placeholder{font-size:28px;color:#999}
  strong,em{font-style:normal}
  ol,ul{list-style:none}
  h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
  table{border-collapse:collapse;border-spacing:0}


  /*Toast*/
  .mint-toast{background: rgba(0, 0, 0, 0.6);}
  .mint-toast .mint-toast-text{font-size: 28px;letter-spacing: 2px;line-height: 40px}
</style>
