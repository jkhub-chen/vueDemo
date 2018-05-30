import axios from 'axios'
import config from './config'
import { Indicator, Toast } from 'mint-ui';

// axios.defaults.baseURL = 'http://dev-care-api.lanxinka.com';
// axios.defaults.headers.common['loginToken'] = '9d09888e76c26710a8712a580dd889ed';

//请求拦截器
axios.interceptors.request.use(function(config) {
  Indicator.open({text: '努力中...', spinnerType: 'fading-circle'});
  return config;
}, function(error) {
  return Promise.reject(error);
});

//返回拦截器
axios.interceptors.response.use(function(response) {
  //服务器响应并返回数据
  Indicator.close();
  if(response.data.code === '0000') {
    return Promise.resolve(response.data);
  }else {
    if(response.data.code === 'A001'){
      Toast({message: response.data.message, duration: 2000});
      return false
    }else {
      return Promise.reject(response.data);
    }
  }
}, function(error) {
  Indicator.close();
  if(error.response) {
    console.log(error.response.status, '服务器响应并返回error的状态码');
    if(error.response.status === 404){
      vm.$router.replace({name: 'NotFoundComponent'})
    }
  }else {
    //服务器未响应
    console.log('服务器未响应');
  }
  return Promise.reject(error);
});

class API {
  get (url, params) {
    config.params = params;
    return axios.get(url, config).then(function(data){
      return Promise.resolve(data);
    }).catch(err => {
      Toast({message: err.message, duration: 2000});
    });
  }

  post (url, params) {
    return axios.post(url, params, config).then(function(data){
      return Promise.resolve(data);
    }).catch(err => {
      Toast({message: err.message, duration: 2000});
    });
  }

  //批处理接口
  batSync (params) {
    return axios.all(params,{},config).then(axios.spread(function(acc,pers){
      console.log(acc,pers)
    }));
  }
}

const apiRoot = new API();

export default apiRoot;

