import axios from './apiAjax'

// 新建权限列表
export const getNewList = param => axios.get(`/1.0/admin/permssion/index`, param);
