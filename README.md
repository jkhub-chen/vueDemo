# 源码地址：https://github.com/Jake8245/vueDemo.git

# npm install or cnpm install（需要先安装镜像）

# npm run dev（开启本地服务，http://ip:8989）

# npm run build（build项目将生成dist文件）


1、引入vue-router编写前端路由，使用history模式并实现了路由的懒加载，并使用了scrollBehavior；

2、引入vuex实现组件之间的数据响应，实现了数据的模块分离；

3、引入axios实现前后端数据交互，独立出了config配置项，并进一步封装了get，post和批量请求方式；

4、引入mint-ui作为基础ui组件；

5、引入jquery以便于复杂组件的编写；

6、引入lib-flexible并结合px2rem实现移动端自适配；

7、封装了jsBridge便于和APP客户端交互

8、封装了全局自定义指令和自定义过滤器

* 这里没有引用less和sass，需要的话自己引入即可
