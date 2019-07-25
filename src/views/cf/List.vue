<template>
  <div id="container">
    <location :large-idx="1" :small-idx="1" />
    <div>보자 내용</div>
    <div id="pagingArea">
      <default-paging :page="page" :rows="rows"/>
    </div>
  </div>
</template>
<script>
import Location from "@/components/Location.vue";

export default {
  name: "List",
  computed: {
    page() {
      return Number(this.$route.query.page) || 1;
    },
    rows() {
      return 222;
    }
  },
  components: {
    Location
  }
};
</script>