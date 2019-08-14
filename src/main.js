// src/main.js

import './css/index.css'
import './css/indexLess.less'
import './css/indexScss.scss'


import Vue from 'vue'
import App from './App.vue'
import Router from 'vue-router'

const Foo = () => import("./views/foo/index.vue")
const Bar = () => import("./views/bar/index.vue")

Vue.use(Router)

const router = new Router({
  linkActiveClass: 'is-active',
  routes: [
    {
      path: '/',
      redirect: '/foo',
    },
    {
      path: '/foo',
      name: 'foo',
      component: Foo
    },
    {
      path: '/bar',
      name: 'bar',
      component: Bar
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')




