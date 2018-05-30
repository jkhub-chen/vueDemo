import Home from '../view/home'
import Login from '../view/login'

import NotFoundComponent from '../view/404'

export default {
  routes: [
    {path: '/', redirect: '/home'}, //重定向
    {path: '/home', name: 'Home', component: Home, meta: {title: '首页'},
      beforeEnter: (to, from, next) => {
        next()
      }
    },
    {path: '/login', name: 'Login', component: Login, meta: {title: '登录'}},
    {path: '*', name: 'NotFoundComponent', component: NotFoundComponent, meta: {title: '404'}}
  ]
}
