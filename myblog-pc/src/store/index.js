import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    userId: '',
    username: ''
  },
  mutations: {
    setUsername: (state, username) => {
      state.username = username
      localStorage.setItem('username', username)
    }
  },
  actions: {
    setToken: (state, token) => {
      state.token = token;
      localStorage.setItem('mytoken', token)
    },
    logout: (state) => {
      state.token = null
      localStorage.removeItem('mytoken')
    },
    setUserId: (state, payload) => {
      state.userId = payload.userId
      localStorage.setItem('userID', payload.userId)
    },
  },
  modules: {
  }
})
