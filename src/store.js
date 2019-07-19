import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    menus: []
  },
  getters: {
    getSubMenus: state => idx => {
      for (let row of state.menus) {
        if (row.idx === idx) {
          if (row.sub !== null) {
            return row.sub;
          }
        }
      }
    },
    getMenuName: state => idx => {
      for (let row of state.menus) {
        if (row.idx === idx) {
          return row.name;
        }
      }
    }
  },
  mutations: {
    setMenus(state, menus) {
      state.menus = menus;
    }
  },
  actions: {
  }
})
