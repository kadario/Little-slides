import { createStore } from 'vuex'

const store = createStore({
  state () {
    return {
      activeIndex: 0
    }
  },
  getters: {
   activeIndex: state => {
     return state.activeIndex
   }
 },
  mutations: {
   changeActive (state, payload) {
     state.activeIndex = payload
   }
 },
 actions: {
   changeActive (context, payload) {
     context.commit("changeActive", payload);
   }
}
})

export default store
