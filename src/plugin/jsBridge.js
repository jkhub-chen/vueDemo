function getCookieValue(key) {
  var regExpModel=`(?:(?:^|.*;\\s*)${key}\\s*\\=\\s*([^;]*).*$)|^.*$`
  var value=document.cookie.replace(new RegExp(regExpModel), "$1");
  return value
}
var platform=getCookieValue("platform");
function isApp() {
  return ['lxk_android','lxk_ios'].indexOf(platform)>-1
}
function toActionString(type,data,callback) {
  return encodeURIComponent(JSON.stringify({type:type,data:data,callback:callback}))
}
function callNative(type,data='',callback='') {
  location.href='/toApp?action='+toActionString(type,data,callback)
}
function login() {
  callNative('login')
}
function fallBack() {
  callNative('fallback')
}
function toAllProduct() {
  callNative('allProduct')
}

//节流函数，首次调用fun，time之后可两次调用
function simThrottle(fun,time){
  var timer=null;
  return function () {
    if(timer){
      return;
    }else{
      timer=setTimeout(function(){
        timer=null
      },time)
      fun()
    }
  }
}
var throttleLogin=simThrottle(login,2000);
export default {
  login:throttleLogin,fallBack,isApp,getCookieValue,toAllProduct
}
