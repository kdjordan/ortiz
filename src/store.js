import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    iammgeIndex: 1,
    images: [
      {
        index: 1,
        link: '@/assets/img/firepit.jpg',
        desc: 'Lord of the rings themed firepit',
        year: 2018
    }
  ]
  },
  mutations: {
    setIsLoading(state, payload){
      state.isLoading = payload
    }
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading
    },
    getCurrentImage(state) {
      return state.images[state.imageIndex]
    }
  },
  actions: {

  }
})
