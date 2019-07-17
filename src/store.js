import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: []
  },
  getters: {
    getMenus: state => state.menus
  },
  mutations: {
    setMenus(state, menus) {
      state.menus = menus;
    }
  },
  actions: {
  }
})
