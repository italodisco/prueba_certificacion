<template>
    <v-container>
      <h1 class="display-2 text-center mb-4 indigo--text font-weight-bold">
      En DeTodito está todo lo que necesito
      </h1>
      <v-divider></v-divider>
      <carrusel></carrusel>
      <CardHome></CardHome>
      <!-- <v-row justify="space-around" align="center" class="iconBox">
        <v-col class="d-flex justify-center">
          <v-card class="pa-5">
            <v-icon size="200" color="light-green"
              >mdi-card-search-outline</v-icon>
          </v-card>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-card class="pa-5">
            <v-icon size="200" color="light-green">mdi-emoticon-excited</v-icon>
          </v-card>
        </v-col>
        <v-col class="d-flex justify-center">
          <v-card class="pa-5">
            <v-icon size="200" color="light-green">mdi-cart-plus</v-icon>
          </v-card>
        </v-col>
      </v-row> -->
    </v-container>
  </template>
  
  <script>
  import Carrusel from '@/components/Carrusel.vue'
  import CardHome from '@/components/CardHome.vue'
  export default {
    name: "home-view",
    // props: {},
    data: function () {
      return {};
    },
    // computed: {},
    //methods: {}
    // watch: {},
  components: {
    Carrusel,
   CardHome
  },
    // mixins: [],
    // filters: {},
    // -- Lifecycle Methods
    // -- End Lifecycle Methods
  };
  </script>
  
  <style scoped>
  .iconBox {
    height: 60vh;
  }
  </style>