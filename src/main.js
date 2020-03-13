import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import home from 'network/home'
import store from './store/index'
import toast from 'components/common/toast/index'

import vuelazyload from 'vue-lazyload'

Vue.config.productionTip = false
Vue.prototype.$bus = new Vue()

Vue.use(toast)
Vue.use(vuelazyload, {
  loading: require('assets/img/common/placeholder.png')
})

new Vue({
  render: h => h(App),
  router,
  store
  // home,
}).$mount('#app')
