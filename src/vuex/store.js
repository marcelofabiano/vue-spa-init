import Vue from 'vue'
import Vuex from 'vuex'

import Categories from './modules/categories/categories'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    Categories
  }
})

export default store
