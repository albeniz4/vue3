<template>
  <div id="header">
    <p class="logo">
      <router-link to="/">
        <img src="@/assets/images/logo_b.png" alt="상쾌환" width="126" />
      </router-link>
    </p>

    <p class="title" v-if="!isMain">{{name}}</p>
    <ul class="nav" v-if="!isMain">
      <li :class="{on:isActive(menu.idx)}" v-for="(menu, idx) in menus" :key="idx">
        <p>
          <a :href="menu.to">{{menu.name}}</a>
        </p>
      </li>
    </ul>

    <p class="control">
      <img src="@/assets/images/btn_arrow.gif" alt />
    </p>
  </div>
</template>

<script>
import {mapState} from 'vuex';

export default {
  name: "Snb",
  data() {
    return {
      name: "",
      menus: []
    };
  },
  mounted() {
    console.log("Snb Mounted");
    let idx = this.findIdx(this.allMenus);
    for (let row of this.allMenus) {
      if (row.idx === idx) {
        this.name = row.name;
        if (row.sub !== null) {
          this.menus = row.sub;
        }
      }
    }
  },
  watch: {
    $route() {
      console.log("Route Modified");
      let idx = this.findIdx(this.allMenus);
      for (let row of this.allMenus) {
        if (row.idx === idx) {
          this.name = row.name;
          if (row.sub !== null) {
            this.menus = row.sub;
          }
        }
      }
    }
  },
  computed: {
    isMain() {
      return this.$route.path === "/";
    },
    ...mapState({allMenus:'menus'})
  },
  methods: {
    isActive(idx) {
      return idx === 1;
    },
    findIdx(data) {
      for (let row of data) {
        if (row.to === this.$route.path) {
          return row.idx;
        }
      }
    }
  },
  created() {
    console.log("Snb Created");
  }
};
</script>
