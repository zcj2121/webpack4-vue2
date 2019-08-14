<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <div class="app-info">{{info}}</div>
    <div class="img"></div>
    <div class="router-link">
      <router-link to="/foo">路由foo</router-link>
      <router-link to="/bar">路由bar</router-link>
    </div>
    <div class="router-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {
        msg: '你好哇',
        info: '这是webpack4 vue配置'
      }
    }
  }
</script>

<style lang="less">
  #app{
    width: 100%;
    padding: 40px 0;
    text-align: center;
    color: red;
    .app-info {
      margin-top: 20px;
      font-size: 16px;
      color: #90c;
      text-indent: 2em;
      box-sizing:border-box;
    }
    .img{
      width:60px;
      height:60px;
      margin: auto;
      margin-top: 20px;
      text-align: center;
      background: url(img/qizhi.png) no-repeat;
      background-size: 100%;

    }
    .router-link{
      margin-top: 20px;
      a {
        padding: 4px 6px;
        font-size: 16px;
        color: #000000;
        border: 1px solid #CCC;
        border-radius: 2px;
        &.is-active {
          background: #aaaaaa;
          border: 1px solid #aaaaaa;
        }
      }
    }
    .router-view{
      width: 500px;
      height: 500px;
      margin: auto;
      margin-top: 20px;
      border: 1px solid #aaaaaa;
    }
  }
</style>