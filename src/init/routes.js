import Vue from 'vue'
import VueRouter from 'vue-router'

import Categories from '../modules/Categories/routes'
import Dashboard from '../modules/Dashboard/routes'

Vue.use(VueRouter)

const baseRoutes = []

const routes = baseRoutes.concat(
  Dashboard,
  Categories
)

const router = new VueRouter({
  routes
})

export default router
