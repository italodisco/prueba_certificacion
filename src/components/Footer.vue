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
          Queremos darte la bienvenida a nuestro sitio, donde encontrarás todo lo que buscas en artículos electrónicos, joyería, ropa de hombre y ropa de mujer. Nuestros productos provienen de tiendas de todas partes del mundo y nos hemos preocupado por cumplir los máximos estándares de calidad. Si tienes alguna pregunta o no puedes encontrar ese producto que tanto necesitas, no dudes en contactarte con nuestro equipo de soporte. 
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