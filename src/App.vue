<template>
  <div id="app">
    <div id="wrapper" v-bind:class="{main:isMain}">
      <snb/>
      <gnb/>
      <router-view/>
      <foot/>
    </div><!-- //wrapper -->
  </div>
</template>
<script>
  // @ is an alias to /src
  import Snb from '@/components/Snb.vue'
  import Gnb from '@/components/Gnb.vue'
  import Foot from '@/components/Foot.vue'
  import axios from 'axios'

  export default {
    name: 'app',
    data() {
      return {
        isMain:false
      }
    },
    components: {
      Snb,
      Gnb,
      Foot
    },
    mounted() {
      this.isMain = this.$router.currentRoute.path === "/";
      console.log("App Mounted");
    },
    watch: {
      $route (to, from) {
        this.isMain = to.path === "/";
      }
    },
    created() {
      console.log("App Created");
      axios.get("/menu.json").then(result=>{
        this.$store.commit("setMenus", result.data);
        console.log(this.$store.state.menus);
      });
    }
  }
</script>
<style lang="scss">
  @import './assets/css/common.scss';
</style>
