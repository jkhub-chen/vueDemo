import * as types from '../mutation-types'

const state = {
  userInfo: 'jake'
};

const mutations = {
  [types.SET_USER_INFO](state, info){
    state.userInfo = info
  }
};

const actions = {
  setUserInfo ({ commit }, info) {
    commit(types.SET_USER_INFO, info)
  }
};

const getters = {
  getUserInfo: (state, rootState, getters, rootGetters) => {
    return state.userInfo
  }
};

export default {
  state,
  mutations,
  actions,
  getters
}
