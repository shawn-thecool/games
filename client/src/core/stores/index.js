import Vue from 'vue'
import Vuex from 'vuex'
// views
import battle from './modules/battle'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    battle
  }
})

export default store
