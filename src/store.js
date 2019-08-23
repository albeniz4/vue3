import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import Cookies from "js-cookie";

import menu from "./store/menu";
import animal from "./store/animal";
import city from "./store/city";
import CookieStorage from "./utils/CookieStorage"

const cookieStorage = new CookieStorage({expires : 1 / 24 / 60 /*1분*/});

const vuexPersistCookie = new VuexPersist({
  key: "vuex-persist-cookie",
  storage: cookieStorage,
  modules: ["animal"]
});

const vuexPersistLocal = new VuexPersist({
  key: "vuex-persist-local",
  storage: localStorage,
  modules: ["city"]
});

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    menu,
    animal,
    city
  },
  plugins: [vuexPersistCookie.plugin, vuexPersistLocal.plugin]
});
