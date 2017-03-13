import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import store from './vuex/store'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import axios from 'axios'
Vue.prototype.$http = axios

import book from './components/book/book.vue'
import home from './components/home/home.vue'
import movie from './components/movie/movie.vue'
import radio from './components/radio/radio.vue'
import team from './components/team/team.vue'

Vue.use(VueRouter)
Vue.use(VueAwesomeSwiper)
global.API_PROXY = 'https://bird.ioliu.cn/v1/?url='

const router = new VueRouter({
  routes: [{
    path: '/book',
    component: book
  }, {
    path: '/home',
    component: home
  }, {
    path: '/movie',
    component: movie
  }, {
    path: '/radio',
    component: radio
  }, {
    path: '/team',
    component: team
  }, {
    path: '/',
    redirect: '/home'
  }],
  linkActiveClass: 'active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  template: '<App/>',
  components: { App }
})
