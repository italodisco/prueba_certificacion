<template>
    <v-footer
      dark
      padless
    >
      <v-card
        flat
        tile
        class="deep-orange lighten-1 white--text text-center"
      >
        <v-card-text>
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4 white--text"
            icon
          >
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>
  
        <v-card-text class="white--text pt-0 font-weight-bold">
          Bienvenido a DeTodito, tu tienda de moda y tecnología. Descubre lo último en ropa masculina, femenina y productos tecnológicos. 
          Encuentra estilos modernos, tendencias de moda y dispositivos de vanguardia. Disfruta de una experiencia de compra segura y conveniente. ¡Gracias por elegir DeTodito, tu destino de moda y tecnología!
     </v-card-text>
  
        <v-divider></v-divider>
  
        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Vuetify</strong>
        </v-card-text>
      </v-card>
    </v-footer>
  
  </template>
  
  <script>
  export default {
      name: 'footer-vue',
      // props: {},
      data: function(){
          return {
              icons: [
          'mdi-facebook',
          'mdi-twitter',
          'mdi-linkedin',
          'mdi-instagram',
        ],
          }
      },
      // computed: {},
      //methods: {}
      // watch: {},
      // components: {},
      // mixins: [],
      // filters: {},
      // -- Lifecycle Methods
      // -- End Lifecycle Methods
  }
  </script>
  
  <style scoped>
      
  </style>