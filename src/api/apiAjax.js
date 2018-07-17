import axios from 'axios'
import config from './config'
import { Indicator, Toast } from 'mint-ui';

// axios.defaults.baseURL = 'http://dev-care-api.lanxinka.com';
// axios.defaults.headers.common['loginToken'] = '9d09888e76c26710a8712a580dd889ed';

//请求拦截器
axios.interceptors.request.use(config => {
  Indicator.open({text: '努力中...', spinnerType: 'fading-circle'});
  console.log(config)
  return config;
}, error => {
  return Promise.reject(error);
});

//返回拦截器
axios.interceptors.response.use(response => {
  //服务器响应并返回数据
  Indicator.close();
  if (response.data.code === '0000') {
    // 判断data不是Object时，解析成Object
    if (!(response.data instanceof Object)) {
      return Promise.resolve(JSON.parse(response.data));
    } else {
      return Promise.resolve(response.data);
    }
  } else {
    if (response.data.code === 'A001') {
      Toast({message: response.data.message, duration: 2000});
    }
    return false
  }
}, error => {
  Indicator.close();
  if (error.response) {
    if(error.response.status === 404){
      vm.$router.replace({name: 'NotFoundComponent'})
    }
    return Promise.reject(error.response);
  } else {
    //服务器未响应
    Toast({message: '服务器未响应', duration: 2000});
    return false
  }
});

class API {
  get (url, params) {
    config.params = params;
    return axios.get(url, config).then(function(data){
      return data;
    }).catch(err => {
      if(err){
        console.log(err.response)
      }
    });
  }

  post (url, params) {
    return axios.post(url, params, config).then(function(data){
      return data;
    }).catch(err => {
      if(err){
        console.log(err.response)
      }
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

