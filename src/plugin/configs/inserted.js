import Vue from 'vue'  //引入vue

//input自动获取焦点
Vue.directive('focus', {
  inserted: function (el) {
    el.focus()
  }
})


//修改title
// Vue.directive('title', {
//   inserted: function (el, binding) {
//     document.title = el.dataset.title
//     // hack在ios微信等webview中无法修改document.title的情况
//     if (/ip(hone|od|ad)/i.test(navigator.userAgent)) {
//       var i = document.createElement('iframe')
//       // i.src = '/static/bi_logo.ico'
//       i.style.display = 'none'
//       i.onload = () => {
//         setTimeout(() => {
//           i.remove()
//         }, 9)
//       }
//       document.body.appendChild(i)
//     }
//   }
// });

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
