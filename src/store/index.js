import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mejoresproductos:[],
    tiposproductos:[],
    ropahombre:[],
    ropamujer:[],
    electronica:[]
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
    },
    // creación de mutación para data de ropa hombre 
    SET_ROPA_HOMBRE(state,ropahombre){
      state.ropahombre=ropahombre
    },
    SET_ROPA_MUJER(state,ropamujer){
      state.ropamujer=ropamujer
    },
    SET_ELECTRONICA(state,electronica){
    state.electronica=electronica
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
  },
  async fetchropaHombre({commit}){
    try{
      let response = await fetch('ropaHombre.json')
      let json = await response.json()
      console.log(json)
      let ropahombre = json;
      commit('SET_ROPA_HOMBRE', ropahombre)
    }
    catch(error){
      console.log(error)
    }
  },
  async fetchropaMujer({commit}){
    try{
      let response = await fetch('ropaMujer.json')
      let json = await response.json()
      console.log(json)
      let ropamujer = json;
      commit('SET_ROPA_MUJER', ropamujer)
    }
    catch(error){
      console.log(error)
    }
  },
  async fetchelectronica({commit}){
    try{
      let response = await fetch('electronica.json')
      let json = await response.json()
      console.log(json)
      let electronica = json;
      commit('SET_ELECTRONICA', electronica)
    }
    catch(error){
      console.log(error)
    }
  }
  },
  modules: {
  }
})
