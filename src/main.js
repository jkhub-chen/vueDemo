import Vue from 'vue'
import App from './App'
import router from './router'                                            //路由
import axios from './ajaxApi/apiRoot'                                    //数据交互
import store from './storeVuex'                                          //vuex
import * as instruct from './plugin/configs/inserted'                    //自定义指令
import * as filters from './plugin/configs/filters'                      //自定义过滤器
//import weChatTitle from 'vue-wechat-title'                               //修改title（兼容时使用）
//Vue.use(weChatTitle)

import mintUi from 'mint-ui'                                             //UI组件
import 'mint-ui/lib/style.css'
Vue.use(mintUi);

import jsBridge from './plugin/jsBridge'                                 //app交互
import hybridMethod from './plugin/hybridMethod'

Vue.config.productionTip = false

Vue.prototype.http = axios

//加载过滤器
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

window.jsBridge = jsBridge

window.hybridMethod = hybridMethod

window.vm = new Vue({
  el: '#app',
  router,
  store,
  instruct,
  components: { App },
  template: '<App/>'
})
