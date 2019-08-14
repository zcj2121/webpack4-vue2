<template>
  <div class="bar">
    <h2 class="bar-title">这是一个路由 bar</h2>
    <p>bar</p>
    <p>bar</p>
    <p>bar</p>
    <img src="../../img/qizhi.png" alt="">
  </div>
</template>

<script>
  export default {
    name: 'bar',
    data() {
      return {
      }
    }
  }
</script>

<style lang="less">
  .bar{
    .bar-title {
      color: #000;
      margin: 15px;
    }
    p {
      color: #000;
    }
  }
</style>