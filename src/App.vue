<template>
  <div id="app">
    <transition name="bounce">
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
  .bounce-enter-active {
    animation: bounce-in .5s;
  }
  .bounce-leave-active {
    animation: bounce-in .5s reverse;
  }
  @keyframes bounce-in {
    0% {
      transform: scale(0);
    }
    50% {
      transform: scale(1.5);
    }
    100% {
      transform: scale(1);
    }
  }


  /*全局样式初始化*/
  body,div,dl,dt,dd,ul,ol,li,h1,h2,h3,h4,h5,h6,pre,code,form,fieldset,legend,input,textarea,p,blockquote,th,td,span{margin:0;padding:0;-webkit-font-smoothing:antialiased;box-sizing:border-box}
  table{border-collapse:collapse;border-spacing:0}
  fieldset,img{border:0;margin:0;padding:0}
  strong,em{font-style:normal}
  ol,ul{list-style:none}
  h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}
  html,body{height:100%;-webkit-tap-highlight-color:transparent}
  input,textarea{outline:0;font-size:14px;color:#666}
  input:-webkit-autofill,textarea:-webkit-autofill,select:-webkit-autofill{background-color:#fff !important;}
  body{width:100%;min-width:320px;background-color:rgba(245,245,245,0.7);background-size:100%;font-size:14px;color:#666;line-height:1;
    font-family:"PingFang SC Light","Helvetica Neue",Helvetica ,"Microsoft Yahei", Arial,sans-serif,"Luxi Sans","DejaVu Sans",Tahoma,"Hiragino Sans GB",STHeiti,SimSun;
    overflow-x:hidden;-webkit-user-select:none;-moz-user-select:none;-o-user-select:none;}
  input::-webkit-input-placeholder,textarea::-webkit-input-placeholder{font-size:14px;color:#999}  /*-webkit和-moz要分开写*/
  input:-moz-placeholder,textarea:-moz-placeholder{font-size:14px;color:#999}
  a{text-decoration:none;-webkit-tap-highlight-color:transparent}
  p{margin:0;padding:0;font-weight:normal}
  img{display:block;width:100%}

  /*mintUi优化*/

  /*Toast*/
  .mint-toast{max-width: 90%;background: rgba(0, 0, 0, 0.6)}
  .mint-toast .mint-toast-text{line-height: 20px}
</style>
