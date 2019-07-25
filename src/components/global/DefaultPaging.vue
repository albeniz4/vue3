<template>
  <div class="paging">
    <button :disabled="!needPrevBlockAction" @click="toPage(firstPage - blockSize)">이전 {{blockSize}}개</button>
    <button :disabled="!needPrevPageAction" @click="toPage(page - 1)">이전 페이지</button>
    <span v-for="(n, idx) in pages" :key="idx" :class="{bold:n===page}" @click="toPage(n)">{{n}}</span>
    <button :disabled="!needNextPageAction" @click="toPage(page + 1)">다음 페이지</button>
    <button :disabled="!needNextBlockAction" @click="toPage(firstPage + blockSize)">다음 {{blockSize}}개</button>
  </div>
</template>
<script>
import Paging from "@/utils/Paging";
export default {
  mixins: [Paging]
};
</script>
<style scoped>
span {
  margin: 2px;
  cursor: pointer;
}
span.bold {
  font-weight: bold;
  cursor: auto;
}
</style>