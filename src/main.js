import Vue from 'vue'

import router from './init/routes'
import store from './init/store'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
