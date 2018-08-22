// import Vue from 'vue'
// import Vuex from 'vuex'
// import actions from './actions'
// import getters from './getters'

import User from './module/user'

// Vue.use(Vuex);

const debug = process.env.NODE_ENV !== 'production';

const store = new Vuex.Store({
  strict: debug,     //严格模式，便于在开发环境中调试
  // actions,
  // getters,
  modules: {
    User
  }
});

export default store
