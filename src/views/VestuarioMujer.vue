<template>
  <v-container>
    <v-divider></v-divider>
    <br />
    <h1 class="text-md-center">Vestuario Mujer</h1>
    <br />
    <v-row justify="space-around">
      <v-col
        cols="12"
        md="6"
        lg="6"
        v-for="producto in ropamujer"
        :key="producto.id"
      >
        <v-card class="mx-auto" max-width="400" height="700">
          <!-- Contenido de la tarjeta -->
          <v-img
            class="white--text align-end"
            height="250px"
            :src="producto.image"
          >
          </v-img>
          <v-card-text class="text--primary">
            <h6 class="product-title">{{ producto.title }}</h6>
            <div class="product-info">
              <p class="product-property">{{ producto.description }}</p>
              <p class="product-property">{{ producto.price }}</p>
              <v-btn color="primary" @click="addToCart(producto)">
                Agregar
              </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";

export default {
  name: "VestuarioMujer",
  computed: {
    ...mapState(["ropamujer"]),
  },
  methods: {
    ...mapActions(["fetchropaMujer", "addToCart"]),
  },
  created() {
    this.fetchropaMujer();
  },
};
</script>
  
  <style scoped>
.product-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
}

.product-info {
  margin-top: 20px;
}

.product-property {
  margin-bottom: 5px;
}
</style>
  