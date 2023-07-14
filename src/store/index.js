import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mejoresproductos:[],
    tiposproductos:[]
  },
  getters: {
  },
   // creación de dos mutaciones que recogerán los dos arrays de json home
  mutations: {
    SET_MEJORES_PRODUCTOS(state,mejoresproductos){
      state.mejoresproductos=mejoresproductos
    },
    SET_TIPOS_PRODUCTOS(state,tiposproductos){
      state.tiposproductos=tiposproductos
    }
  },
  // creación de función que traerá la data que será puesta en carrusel
  actions: {
    async fetchInfo ({commit}){
    try {
      let response=await fetch (`home.json`)
      let json = await response.json()
      console.log (json)
      let mejoresproductos = json.mejoresproductos
      let tiposproductos = json.tiposproductos
      commit('SET_MEJORES_PRODUCTOS', mejoresproductos)
      commit ('SET_TIPOS_PRODUCTOS', tiposproductos)
    }
    catch (error){
      console.log(error)
    }
  }
  },
  modules: {
  }
})
