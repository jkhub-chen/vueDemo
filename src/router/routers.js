const Home = () => import('../views/home')
const Login = () => import('../views/login')

const NotFoundComponent = () => import('../views/404')

export default [
  {path: '/', redirect: '/home'}, //重定向
  {path: '/home', name: 'Home', component: Home, meta: {title: '首页'},
    beforeEnter: (to, from, next) => {
      next()
    }
  },
  {path: '/login', name: 'Login', component: Login, meta: {title: '登录'}},
  {path: '*', name: 'NotFoundComponent', component: NotFoundComponent, meta: {title: '404'}}
]
