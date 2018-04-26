import Vue from 'vue'
import Vuex from 'vuex'

import Categories from '../modules/Categories/store/main'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Categories
  }
})

export default store
