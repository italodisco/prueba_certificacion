import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mejoresproductos: [],
    tiposproductos: [],
    ropahombre: [],
    ropamujer: [],
    electronica: [],
    cart: []
  },
  getters: {
    cartProducts(state) {
      return state.cart.map(prod => {
        let myProd = prod
        myProd.total = prod.count * prod.price
        return myProd
      })
    },
    cartCount(state) {
      return state.cart.length
    },
    cartTotal(state, getters) {
      return getters.cartProducts.reduce((total, prod) => {
        return total + prod.total
      }, 0)
    }
  },
  mutations: {
    SET_MEJORES_PRODUCTOS(state, mejoresproductos) {
      state.mejoresproductos = mejoresproductos
    },
    SET_TIPOS_PRODUCTOS(state, tiposproductos) {
      state.tiposproductos = tiposproductos
    },
    SET_ROPA_HOMBRE(state, ropahombre) {
      state.ropahombre = ropahombre
    },
    SET_ROPA_MUJER(state, ropamujer) {
      state.ropamujer = ropamujer
    },
    SET_ELECTRONICA(state, electronica) {
      state.electronica = electronica
    },
    ADD_PRODUCT_TO_CART(state, product) {
      let exist = state.cart.some(p => p.id == product.id)
      if (exist == false) {
        state.cart.push(product)
      } else {
        state.cart.forEach(p => {
          if (p.id == product.id) {
            p.count += 1;
          }
        })
      }
    },
    ADD_STOCK_PRODUCT_CART(state, idProduct) {
      state.cart.forEach(p => {
        if (p.id == idProduct) {
          p.count += 1;
        }
      })
    },
    REMOVE_STOCK_PRODUCT_CART(state, idProduct) {
      state.cart.forEach(p => {
        if (p.id == idProduct && p.count > 1) {
          p.count -= 1;
        }
      })
    }
  },
  actions: {
    async fetchInfo({ commit }) {
      try {
        let response = await fetch('home.json')
        let json = await response.json()
        let mejoresproductos = json.mejoresproductos
        let tiposproductos = json.tiposproductos
        commit('SET_MEJORES_PRODUCTOS', mejoresproductos)
        commit('SET_TIPOS_PRODUCTOS', tiposproductos)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchropaHombre({ commit }) {
      try {
        let response = await fetch('ropaHombre.json')
        let json = await response.json()
        let ropahombre = json;
        commit('SET_ROPA_HOMBRE', ropahombre)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchropaMujer({ commit }) {
      try {
        let response = await fetch('ropaMujer.json')
        let json = await response.json()
        let ropamujer = json;
        commit('SET_ROPA_MUJER', ropamujer)
      } catch (error) {
        console.log(error)
      }
    },
    async fetchelectronica({ commit }) {
      try {
        let response = await fetch('electronica.json')
        let json = await response.json()
        let electronica = json;
        commit('SET_ELECTRONICA', electronica)
      } catch (error) {
        console.log(error)
      }
    },
    addProductCart({ commit }, product) {
      commit('ADD_PRODUCT_TO_CART', product)
    },
    removeCartProduct({ commit }, idProduct) {
      commit('REMOVE_PRODUCT_CART', idProduct)
    },
    addStockCartProduct({ commit }, idProduct) {
      commit('ADD_STOCK_PRODUCT_CART', idProduct)
    },
    removeStockCartProduct({ commit }, idProduct) {
      commit('REMOVE_STOCK_PRODUCT_CART', idProduct)
    }
  },
  modules: {}
})
