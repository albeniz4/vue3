<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>
<script>
import DefaultLayout from "@/components/layouts/DefaultLayout.vue";
import MainLayout from "@/components/layouts/MainLayout.vue";

import { mapMutations } from "vuex";
import axios from "axios";

export default {
  name: "app",
  components: {
    DefaultLayout,
    MainLayout
  },
  mounted() {
    console.log("App Mounted");
    axios.get("/menu.json").then(result => {
      this.setMenus(result.data);
    });
  },
  methods: {
    ...mapMutations("menu", ["setMenus"])
  },
  created() {
    console.log("App Created");
  },
  computed: {
    layout() {
      return this.$route.meta.layout || "default-layout";
    }
  }
};
</script>
<style lang="scss">
@import "./assets/css/common.scss";
</style>
