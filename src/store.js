import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    isLoading: false,
    imageIndex: 0,
    images: [
      {
        index: 0,
        link: require('@/assets/img/firepit.jpg'),
        desc: 'Lord of the rings themed firepit',
        year: 2018,
        holder: 'Firepit'
      },
      {
        index: 1,
        link: require('@/assets/img/bench.jpg'),
        desc: 'Outdoor decorative bench',
        year: 2018,
        holder: 'Bench'
      },
      {
        index: 2,
        link: require('@/assets/img/austin-wall.jpg'),
        desc: 'Interior Wall Sculpture',
        year: 2018,
        holder: 'Sculpture'
      },
      {
        index: 3,
        link: require('@/assets/img/platform.jpg'),
        desc: 'Diving platform at private residence',
        year: 2018,
        holder: 'Dive'
      },
      {
        index: 4,
        link: require('@/assets/img/hero-symbiosis.jpg'),
        desc: 'Outdoor public sculpture',
        year: 2018,
        holder: 'Symbiosis'
      },
  ]
  },
  mutations: {
    setIsLoading(state, payload){
      state.isLoading = payload
    },
    moveIndex(state, payload) {
      if (payload == 1) {
        if(state.imageIndex == state.images.length-1) {
          console.log('firing')
          state.imageIndex = 0
        } else if (state.imageIndex < state.images.length-1){
          state.imageIndex++
        }

      } else if (payload == 0) {
          if(state.imageIndex == 0) {
            state.imageIndex = state.images.length-1
          } else if(state.imageIndex > 0) {
            state.imageIndex--
          }
      }
    }
  },
  getters: {
    getIsLoading(state) {
      return state.isLoading
    },
    getCurrentImage(state) {
      return state.images[state.imageIndex]
    },
    getAllImages(state) {
      return state.images
    }
  },
  actions: {

  }
})
