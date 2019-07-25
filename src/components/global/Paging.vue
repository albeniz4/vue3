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
export default {
  props: {
    page: {
      type: Number,
      default: 1
    },
    rows: Number,
    pageSize: {
      type: Number,
      default: 10
    },
    blockSize: {
      type: Number,
      default: 10
    }
  },
  computed: {
    totalPages() {
      return Math.floor((this.rows - 1) / this.pageSize) + 1;
    },
    totalBlocks() {
      return Math.floor((this.totalPages - 1) / this.blockSize) + 1;
    },
    currentBlock() {
      return Math.floor((this.page - 1) / this.blockSize) + 1;
    },
    needHeadPageAction() {
      return this.page > 1;
    },
    needEndPageAction() {
      return this.page < this.totalPages;
    },
    needPrevBlockAction() {
      return this.currentBlock > 1;
    },
    needNextBlockAction() {
      return this.currentBlock < this.totalBlocks;
    },
    needPrevPageAction() {
      return this.page > 1;
    },
    needNextPageAction() {
      return this.page < this.totalPages;
    },
    firstPage() {
      return (this.currentBlock - 1) * this.blockSize + 1;
    },
    pages() {
      let arr = [];
      for (let i = 0; i < this.blockSize; i++) {
        let n = i + this.firstPage;

        if (n <= this.totalPages) {
          arr.push(n);
        } else break;
      }

      return arr;
    }
  },
  methods: {
    toPage(n) {
      if (this.page !== n) {
        this.$router.push({ path: this.updatePageParam(n)});
      }
    },
    updatePageParam(n) {
      let _url = this.$route.fullPath;
      if (_url.indexOf("page=") > -1) {
        const PARAM = "page";
        let reg = new RegExp("(([&|?])*" + PARAM + "=([^&]*))", "g");
        let headChar = _url[_url.search(reg)];
        _url = _url.replace(reg, headChar + PARAM + "=" + n);
      }
      else {
        _url += (_url.indexOf("?") > -1 ? "&" : "?") +  "page=" + n;
      }

      return _url;
    }
  }
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