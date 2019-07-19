<template>
  <div id="gnb">
    <gnb-user/>
    <ul class="nav">
      <li v-for="(menu, idx) in menus" :class="{on:isActive(menu.to)}" :key="idx">
        <router-link v-bind:to="{path:menu.to}">{{menu.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import GnbUser from '@/components/GnbUser.vue'
  import {mapState} from 'vuex'

  export default {
    name: 'Gnb',
    data() {
      return {
        currentPath: ''
      }
    },
    mounted() {
      console.log("Gnb Mounted");
      this.currentPath = this.$route.path;
    },
    watch: {
      $route (to) {
        this.currentPath = to.path;
      }
    },
    computed: {
      ...mapState(['menus'])
    },
    methods : {
      isActive(path) {
        console.log(path + "," + this.currentPath);
        return path === this.currentPath;
      }
    },
    created() {
      console.log("Gnb Created");
    },
    components: {
      GnbUser
    }
  }
</script>
