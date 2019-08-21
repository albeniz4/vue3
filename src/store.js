import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

import menu from "./store/menu";
import animal from "./store/animal";
import city from "./store/city";

const vuexPersist = new VuexPersist({
  key: "vuex-persist-store",
  storage: localStorage,
  modules: ["animal"]
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    menu,
    animal,
    city
  },
  plugins: [vuexPersist.plugin]
});
