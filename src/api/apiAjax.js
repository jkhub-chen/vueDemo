// import axios from 'axios'
import axiosConfig from './config'
import { Toast, Indicator } from 'mint-ui';

const instance = axios.create(axiosConfig);

//请求拦截器
instance.interceptors.request.use(config => {
  Indicator.open({text: '努力中...', spinnerType: 'fading-circle'});  // 请求数据时开始loading
  return config;
}, error => {
  return Promise.reject(error);
});

//返回拦截器
instance.interceptors.response.use(response => {
  //服务器响应并返回数据
  Indicator.close();  // 返回数据时关闭loading
  if (response.data.code === 0) {
    // 判断data不是Object时，解析成Object
    if (!(response.data instanceof Object)) {
      return Promise.resolve(JSON.parse(response.data));
    } else {
      return Promise.resolve(response.data);
    }
  } else {
    Toast({message: response.data.msg, duration: 2000});  // 返回业务特殊的业务code
    return false
  }
}, error => {
  Indicator.close();  // 返回报错时关闭loading
  if (error.response) {
    if(error.response.status === 404){
      vm.$router.replace({name: 'NotFoundHTML'})
    }else{
      Toast({message: error.response.statusText, duration: 2000});
    }
  } else {
    //服务器未响应
    Toast({message: '服务器未响应，请稍后重试！', duration: 2000});
  }
  return false
});

export default instance;

