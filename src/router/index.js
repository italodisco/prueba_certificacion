import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from  '@/views/NotFound.vue'
import VestuarioHombre from '@/views/VestuarioHombre.vue'
import VestuarioMujer from '@/views/VestuarioMujer.vue'
import Electrónica from '@/views/Electrónica.vue'
import Cart from '@/views/Cart.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/VestuarioHombre',
    name: 'Vestuario Hombre',
    component: VestuarioHombre
  },
  {
    path: '/VestuarioMujer',
    name: 'Vestuario Mujer',
    component: VestuarioMujer
  },
  {
    path: '/Electrónica',
    name: 'Electrónica',
    component: Electrónica
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '*',
    component: NotFound
    }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
