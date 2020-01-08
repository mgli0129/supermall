import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueLazyLoad from 'vue-lazyload'
import api from './network/api'

Vue.config.productionTip = false

//挂载网络api
Vue.prototype.$api = api;

Vue.use(VueLazyLoad, {
  preload: 1,
  loading: require('assets/img/common/placeholder.png')
})

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
