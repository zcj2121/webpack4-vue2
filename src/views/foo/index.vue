<template>
  <div class="foo">
    <h2 class="foo-title">这是一个路由 foo</h2>
    <p>foo</p>
    <p>foo</p>
    <p>foo</p>
  </div>
</template>

<script>
  export default {
    name: 'foo',
    data() {
      return {
      }
    }
  }
</script>

<style lang="less">
  .foo{
    .foo-title {
      color: #000;
      margin: 15px;
    }
    p {
      color: #000;
    }
  }
</style>