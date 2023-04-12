import { createStore } from 'vuex'
import axios from 'axios'

export default createStore({
  state: {
    backData: {},
  },
  getters: {
  },
  mutations: {
    GET_DUMMY(state, backData) {
      this.state.backData = backData;
    }
  },
  actions: {
    getDummy(context) {
      return axios.get('/api/getDummy')
        .then(
          ({ data }) => { 
            console.dir(data); 
            context.commit('GET_DUMMY', data) 
          }
        )
        .catch(error => console.log(error));
    }
  },
  modules: {
  }
})
