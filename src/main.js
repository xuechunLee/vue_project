
import Vue from 'vue'
import App from './App.vue'
// import {Toast} from 'mint-ui'
import VueLazyload from 'vue-lazyload'
import store from './store'
import 'lib-flexible'


import router from './router'
import './mock/mockServer'


new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router,
  store
})
