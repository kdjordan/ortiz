import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    imageIndex: 3,
    images: [
      {
        index: 1,
        link: require('@/assets/img/firepit.jpg'),
        desc: 'Lord of the rings themed firepit',
        year: 2018
      },
      {
        index: 2,
        link: require('@/assets/img/bench.jpg'),
        desc: 'Outdoor decorative bench',
        year: 2018
      },
      {
        index: 3,
        link: require('@/assets/img/austin-wall.jpg'),
        desc: 'Interior Wall Sculpture',
        year: 2018
      },
      {
        index: 4,
        link: require('@/assets/img/platform.jpg'),
        desc: 'Diving platform at private residence',
        year: 2018
      },
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
