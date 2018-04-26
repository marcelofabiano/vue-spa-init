import Vue from 'vue'

import router from './configs/routes'
import store from './configs/store'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
