<template>
  <div id="container">
    <red-link url="http://www.naver.com">네이버로 가기</red-link>
    <br />
    <blue-link url="http://www.daum.net">다음</blue-link>
    <br />
    <br />
    <base-layout>
      <template v-slot:header>애국가 1절</template>
      동해물과 백두산이 마르고 닳도록
      <br />하느님이 보우하사 우리나라 만세
      <template #footer>작곡가 : 안익환</template>
    </base-layout>
    <div id="demo">
      <button @click="show = !show">Toggle</button>
      <transition name="fade">
        <p v-if="show">동해물과 백두산이 마르고 닳도록</p>
      </transition>
    </div>

    <div id="example-1">
      <button @click="show1 = !show1">Toggle render</button>
      <transition name="slide-fade">
        <p v-if="show1">hello</p>
      </transition>
    </div>
  </div>
</template>
<script>
import BaseLayout from "@/components/BaseLayout.vue";

export default {
  name: "home",
  components: {
    BaseLayout
  },
  data() {
    return {
      show: true,
      show1: true
    };
  }
};
</script>
<style scoped>
div {
  margin-top: 10px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 4s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
