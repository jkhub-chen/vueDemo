1、npm install 或 cnpm install（需要先安装镜像）

2、npm run start（开启本地服务，以本机ip的形式抛出链接）

3、使用cross-env分环境打包，构建项目将生成dist文件夹
* npm run dev（适用于开发环境）
* npm run test（适用于测试环境）
* npm run prod（适用于生产环境）


* 引入vue-router编写前端路由，使用history模式并实现了路由的懒加载；

* 引入vuex来实现组件之间的数据响应，采用了数据的模块化分离方式；

* 引入axios来实现前后端的数据交互，独立出了config配置项；

* 引入mint-ui作为基础ui组件；

* 引入jquery来实现复杂组件的编写；

* 引入lib-flexible并结合px2rem实现移动端自适配；

* 封装了jsBridge便于和APP客户端交互；

* 封装了全局自定义指令和自定义过滤器；

* 这里没有引用less和sass，需要的话自己引入即可；

* 第三方插件采用CDN的方式引入，优化首开过慢的问题。
