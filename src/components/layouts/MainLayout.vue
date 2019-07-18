<template>
  <div id="wrapper">
    <snb />
    <gnb />
    <slot />
    <foot />
    Main
  </div>
</template>
<script>
import Snb from "@/components/Snb.vue";
import Gnb from "@/components/Gnb.vue";
import Foot from "@/components/Foot.vue";

export default {
  name: "MainLayout",
  components: {
    Snb,
    Gnb,
    Foot
  }
};
</script>
