<template>
  <div>
    <header>
      여기는 헤더 영역
      <h1>
        <slot name="header"></slot>
      </h1>
    </header>
    <main style="margin-top:10px;">
      여기는 메인영역
      <p>
        <slot></slot>
      </p>
    </main>
    <footer style="margin-top:10px;">
      여기는 푸터영역
      <h1>
        <slot name="footer"></slot>
      </h1>
    </footer>
  </div>
</template>
<script>
export default {
  name: "BaseLayout"
};
</script>
<style scoped>
    header {border: 1px solid gray; background-color: lightgreen;}
    main {border: 1px solid gray; background-color: lightpink;}
    footer {border: 1px solid gray; background-color: lightseagreen;}
    main p{font-size: 15px;}
</style>
