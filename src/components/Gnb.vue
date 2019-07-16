<template>
  <div id="gnb">
    <gnb-user/>
    <ul class="nav">
      <li v-for="(menu, idx) in this.$store.state.menus" :class="{on:isActive(menu.to)}" :key="idx">
        <router-link v-bind:to="{path:menu.to}">{{menu.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import GnbUser from '@/components/GnbUser.vue'

  export default {
    name: 'Gnb',
    data() {
      return {
        currentPath: ''
      }
    },
    mounted() {
      console.log("Gnb Mounted");
    },
    watch: {
      $route (to, from) {
        this.currentPath = to.path;
      }
    },
    methods : {
      isActive(path) {
        return path === this.currentPath;
      },
      findName(path) {
        for (let menu of this.$store.state.menus) {
          if (menu.to === path) {
            return menu.name;
          }
        }
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
