import Vue from 'vue'
import App from '@/core/App'
import { router, store } from './core'
import '@/plugins/socket'

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
