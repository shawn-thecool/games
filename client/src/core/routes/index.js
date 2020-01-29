import Vue from 'vue'
import Router from 'vue-router'
import { Battle } from '@/views'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'battle-page',
      component: Battle
    }
  ]
})

export default router
