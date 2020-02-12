import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/c/:slug',
    name: 'category',
    component: () => import('../views/Category.vue'),
    props: true
  },
  {
    path: '/p/:slug',
    name: 'product',
    component: () => import('../views/Product.vue'),
    props: true
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
