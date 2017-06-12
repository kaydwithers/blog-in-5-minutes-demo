
import Vuex from 'vuex'

const store = () => {
  return new Vuex.Store({
    state: {
      menuActive: false
    },
    mutations: {
      toggleMenu (state) {
        state.menuActive = !state.menuActive
      }
    }
  })
}

export default store
