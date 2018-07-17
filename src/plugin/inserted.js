import Vue from 'vue'  //引入vue

//input自动获取焦点
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})

//图片预加载占位
Vue.directive('bgImg', {
  inserted: function (el, binding) {
    var color = Math.floor(Math.random()*1000000);
    el.style.backgroundColor = '#' + color;

    var img = new Image();
    img.src = binding.value;
    img.onload = function(){
      el.style.backgroundImage = 'url(' + binding.value + ')';
    };
  }
});
