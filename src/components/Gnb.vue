<template>
  <div id="gnb">
    <gnb-user/>
    <ul class="nav">
      <li v-for="(menu, idx) in menus" :class="{on:isCurrent(menu.to)}" :key="idx">
        <router-link :to="{path:menu.to}">{{menu.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import GnbUser from '@/components/GnbUser.vue'
  import {mapState} from 'vuex'

  export default {
    mounted() {
      console.log("Gnb Mounted");
    },
    computed: {
      ...mapState(['menus'])
    },
    methods : {
      isCurrent(path) {
        return path == this.$route.path;
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
