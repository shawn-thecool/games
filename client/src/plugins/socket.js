import Vue from 'vue'
import io from 'socket.io-client'

const socket = io.connect('http://172.25.101.218:9000')

const plugin = {
  install(vue) {
    vue.mixin({})
    vue.prototype.$_join = () => {
      socket.on('join', ({ msg }) => console.log('msg-from-server : ', msg))
    }
    vue.prototype.$_test = data => {
      console.log('client-test', data)
      socket.emit('test', data)
    }
    vue.prototype.$_battle = () => {
      console.log('dd')
      socket.on('battle', data => {
        console.log('client-battle', data)
      })
    }
    vue.prototype.$socket = socket
  }
}

Vue.use(plugin)
