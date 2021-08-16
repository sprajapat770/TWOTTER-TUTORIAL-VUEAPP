import { createStore } from 'vuex'
import {UserModule} from "./User";

export default createStore({
  state: {
  },
  //mutation are the functions that effect the STATE
  mutations: {
  },

  //Actions are the function you call throughout your appliation
  actions: {
  },

  modules: {
    User:UserModule
  }
})
