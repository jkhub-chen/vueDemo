/**
 * Created by chenguodong on 2017/5/10.
 */
import Qs from 'qs'
let env = process.env.NODE_ENV
let apiRoot = {
  production: {
    BASE_URL: 'http://admin-api.koubeigongzuo.com'
  },
  test: {
    BASE_URL: 'http://job-admin-api.st1.test.lanxinka.com'
  },
  development: {
    BASE_URL: 'http://admin-api.msx.dev.lanxinka.com'
  }
}[env]

let token = '';
let getToken = localStorage.getItem('loginToken');
if(getToken){
  token = getToken
}

export default {
  //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
  //url: 'http://dev-care-api.lanxinka.com',

  //默认请求方式为get
  // method: 'get',

  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL: apiRoot.BASE_URL,

  // `headers` 是即将被发送的自定义请求头
  headers: {
    authorization: token
  },

  // `params` 是即将与请求一起发送的 URL 参数
  // 必须是一个无格式对象(plain object)或 URLSearchParams 对象
  params: {},

  // `data` 是作为请求主体被发送的数据
  // 只适用于这些请求方法 'PUT', 'POST', 和 'PATCH'
  // 在没有设置 `transformRequest` 时，必须是以下类型之一：
  // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
  // - 浏览器专属：FormData, File, Blob
  // - Node 专属： Stream
  // post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
  data: {},

  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 只能用在 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 后面数组中的函数必须返回一个字符串，或 ArrayBuffer，或 Stream
  transformRequest: [function (data) {
    // 这里可以在发送请求之前对请求数据做处理，比如form-data格式化等，这里可以使用开头引入的Qs（这个模块在安装axios的时候就已经安装了，不需要另外安装）
    data = Qs.stringify(data);
    return data;
  }],

  //`transformResponse`允许返回的数据传入then/catch之前进行处理
  transformResponse: [function (data) {
    // 这里提前处理返回的数据
    return data;
  }],

  // `paramsSerializer` 是一个负责 `params` 序列化的函数
  // (e.g. https://www.npmjs.com/package/qs, http://api.jquery.com/jquery.param/)
  // paramsSerializer: function(params) {
  //   return Qs.stringify(params, {arrayFormat: 'brackets'})
  // },

  // `timeout` 指定请求超时的毫秒数(0 表示无超时时间)
  // 如果请求话费了超过 `timeout` 的时间，请求将被中断
  timeout: 8000,

  // `validateStatus` 定义对于给定的HTTP 响应状态码是 resolve 或 reject  promise 。如果 `validateStatus` 返回 `true` (或者设置为 `null` 或 `undefined`)，promise 将被 resolve; 否则，promise 将被 reject
  validateStatus: function (status) {
    return status >= 200 && status < 300; // 默认的
  },


  // `responseType` 表示服务器响应的数据类型，可以是 'arraybuffer', 'blob', 'document', 'json', 'text', 'stream'
  responseType: 'json',

  // `withCredentials` 表示跨域请求时是否需要使用凭证
  withCredentials: false,

  // `maxRedirects` 定义在 node.js 中 follow 的最大重定向数目
  // 如果设置为0，将不会 follow 任何重定向
  maxRedirects: 5, // 默认的

  // `httpAgent` 和 `httpsAgent` 分别在 node.js 中用于定义在执行 http 和 https 时使用的自定义代理。允许像这样配置选项：
  // `keepAlive` 默认没有启用
  // httpAgent: new http.Agent({ keepAlive: true }),
  // httpsAgent: new https.Agent({ keepAlive: true }),

  // 'proxy' 定义代理服务器的主机名称和端口
  // `auth` 表示 HTTP 基础验证应当用于连接代理，并提供凭据
  // 这将会设置一个 `Proxy-Authorization` 头，覆写掉已有的通过使用 `header` 设置的自定义 `Proxy-Authorization` 头。
  // proxy: {
  //   host: '127.0.0.1',
  //   port: 9000,
  //   auth: {
  //     username: 'mikeymike',
  //     password: 'rapunz3l'
  //   }
  // },

  // `xsrfCookieName` 是用作 xsrf token 的值的cookie的名称
  // xsrfCookieName: 'XSRF-TOKEN',

  // `xsrfHeaderName` 是承载 xsrf token 的值的 HTTP 头的名称
  // xsrfHeaderName: 'X-XSRF-TOKEN',

  // `adapter` 允许自定义处理请求，以使测试更轻松
  // 返回一个 promise 并应用一个有效的响应 (查阅 [response docs](#response-api)).
  // adapter: function (config) {
  //   console.log(config)
  // },

  // `auth` 表示应该使用 HTTP 基础验证，并提供凭据
  // 这将设置一个 `Authorization` 头，覆写掉现有的任意使用 `headers` 设置的自定义 `Authorization`头
  // auth: {
  //   username: 'janedoe',
  //   password: 's00pers3cret'
  // },

  // `onUploadProgress`允许处理上传过程的事件
  // onUploadProgress: function(progressEvent){
  //   //本地过程事件发生时想做的事
  // },

  // `onDownloadProgress`允许处理下载过程的事件
  // onDownloadProgress: function(progressEvent){
  //   //下载过程中想做的事
  // },

  // `maxContentLength` 定义http返回内容的最大容量
  // maxContentLength: 2000,

  // `cancelToken` 指定用于取消请求的 cancel token
  // （查看后面的 Cancellation 这节了解更多）
  // cancelToken: new CancelToken(function (cancel) {})
}
