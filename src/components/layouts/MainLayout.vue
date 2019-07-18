<template>
  <div id="wrapper">
    <main-snb />
    <gnb />
    <slot />
    <foot />
  </div>
</template>
<script>
import MainSnb from "@/components/MainSnb.vue";
import Gnb from "@/components/Gnb.vue";
import Foot from "@/components/Foot.vue";

export default {
  name: "MainLayout",
  components: {
    MainSnb,
    Gnb,
    Foot
  }
};
</script>
