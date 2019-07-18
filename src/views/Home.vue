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
  </div>
</template>
<script>
import BaseLayout from "@/components/BaseLayout.vue";

export default {
  name: "home",
  components: {
    BaseLayout
  }
};
</script>
<style scoped>
#container {
  margin-top: 10px;
}
</style>
