import jsBridge from './jsBridge'
function toList() {
    if(vm.jsBridge.isApp()){
        vm.jsBridge.toAllProduct();
    }else{
        vm.$router.push('/regular/list')
    }
}
export default {
    toList
}