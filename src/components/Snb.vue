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
import {mapGetters, mapState} from 'vuex';

export default {
  computed: {
    isMain() {
      return this.$route.path === "/";
    },
    menus() {
      return this.getSubMenus(this.idx);
    },
    idx() {
      return this.findIdx(this.allMenus);
    },
    name() {
      return this.getMenuName(this.idx);
    },
    ...mapGetters("menu", ['getMenuName', 'getSubMenus']),
    ...mapState("menu", {allMenus:'menus'})
  },
  methods: {
    isActive: idx => idx === 1,
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
