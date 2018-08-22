// import Vue from 'vue'
// import Router from 'vue-router'
import { Toast } from 'mint-ui';

import routers from './routers'

// Vue.use(Router);

const router = new VueRouter({
  mode: 'history',
  routes: routers,
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return {x: 0, y: 0}
    }
  }
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title;   //title修改
  if(navigator.onLine){
    next();
  }else{
    Toast('您的网络已断开连接！');
    next(false)
  }
});

// vueRouter.afterEach((to, from) => {
//   console.log(to)
// });

export default router
