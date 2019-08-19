import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersist from 'vuex-persist'

import main from './store/main'
import animal from './store/animal'
import city from './store/city'

const vuexPersist = new VuexPersist({
    key: 'vuex-persist-store',
    storage: localStorage,
    modules: ['animal']
})

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    main,
    animal,
    city
  },
  plugins: [vuexPersist.plugin]
})