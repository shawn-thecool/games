import Vue from 'vue'
import io from 'socket.io-client'
import { SOCKET_EVENT } from '@/constants'
console.log('**', SOCKET_EVENT)

const socket = io('http://localhost:9000')
const plugin = {
  install(vue) {
    vue.mixin({})
    vue.prototype.$_sendTestData = $payload => {
      socket.emit(SOCKET_EVENT.PUSH_DATA_TEST, {
        msg: $payload.msg,
        name: $payload.name
      })
    }
    vue.prototype.$socket = socket
  }
}

Vue.use(plugin)
