/**
 * Created by chenguodong on 2017/5/10.
 */
import Qs from 'qs'

const token = localStorage.getItem('loginToken')
//const apiRoot = location.origin;                    //提测
const apiRoot = 'https://api.gocfae.com';

export default {
  //请求的接口，在请求的时候，如axios.get(url,config);这里的url会覆盖掉config中的url
  //url: 'http://dev-care-api.lanxinka.com',

  //默认请求方式为get
  // method: 'get',

  //`baseURL`如果`url`不是绝对地址，那么将会加在其前面，当axios使用相对地址时这个设置非常方便
  baseURL: apiRoot,

  //`headers`是自定义的要被发送的头信息
  headers: {
    loginToken: token
  },

  //`params`是请求连接中的请求参数，必须是一个纯对象，或者URLSearchParams对象
  params: {},

  //`data`是请求提需要设置的数据
  //只适用于应用的'PUT','POST','PATCH'，请求方法
  //当没有设置`transformRequest`时，必须是以下其中之一的类型（不可重复？）：
  //-string,plain object,ArrayBuffer,ArrayBufferView,URLSearchParams
  //-仅浏览器：FormData,File,Blob
  //-仅Node：Stream
  //post参数，使用axios.post(url,{},config);如果没有额外的也必须要用一个空对象，否则会报错
  data: {},

  //`transformRequest`允许请求的数据在传到服务器之前进行转化。
  //这个只适用于`PUT`,`GET`,`PATCH`方法。
  //数组中的最后一个函数必须返回一个字符串，一个`ArrayBuffer`,或者`Stream`
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

  //`paramsSerializer`是一个可选的函数，是用来序列化参数
  //例如：（https://ww.npmjs.com/package/qs,http://api.jquery.com/jquery.param/)
  // paramsSerializer: function(params){
  //   return Qs.stringify(params,{arrayFormat:'brackets'})
  // },

  //`timeout`定义请求的时间，单位是毫秒，如果请求的时间超过这个设定时间，请求将会停止
  timeout: 8000,

  //返回数据类型,默认为json
  responseType: 'json',

  //`withCredentials`表明是否跨域请求，默认值false，应该是用证书
  withCredentials:false,

  //`onUploadProgress`允许处理上传过程的事件
  // onUploadProgress: function(progressEvent){
  //   //本地过程事件发生时想做的事
  // },

  //`onDownloadProgress`允许处理下载过程的事件
  // onDownloadProgress: function(progressEvent){
  //   //下载过程中想做的事
  // },

  //`maxContentLength` 定义http返回内容的最大容量
  // maxContentLength: 2000,
}
