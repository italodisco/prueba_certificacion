<template>
  <v-container>
    <v-divider></v-divider>
    <br />
    <h1 class="text-md-center">Vestuario Hombre</h1>
    <br />
    <v-row justify="space-around">
      <v-col
        cols="12"
        md="6"
        lg="6"
        v-for="ropaHombre in ropahombre"
        :key="ropaHombre.id"
      >
        <v-card class="mx-auto" max-width="400" height="700">
          <v-img
            class="white--text align-end"
            height="250px"
            :src="ropaHombre.image"
          >
          </v-img>
          <v-card-text class="text--primary">
            <h6 class="product-title">{{ ropaHombre.title }}</h6>
            <div class="product-info">
              <p class="product-property">{{ ropaHombre.description }}</p>
              <p class="product-property">{{ ropaHombre.price }}</p>
              <v-btn color="primary" @click="add(ropaHombre)"> Agregar </v-btn>
            </div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

    <v-snackbar
      v-model="showSnackbar"
      :timeout="snackbarTimeout"
      multi-line
      vertical
    >
      Producto agregado a la bolsa de compras
    </v-snackbar>
  </v-container>
</template>
  
  <script>
import { mapActions, mapState } from "vuex";

export default {
  name: "VestuarioHombre",
  data() {
    return {
      showSnackbar: false,
      snackbarTimeout: 3000, 
    };
  },
  computed: {
    ...mapState(["ropahombre"]),
  },
  methods: {
    ...mapActions(["fetchropaHombre", "addProductCart"]),
    add(ropaHombre) {
      let prod = {
        id: ropaHombre.id,
        title: ropaHombre.title,
        price: ropaHombre.price,
        count: 1,
      };
      this.addProductCart(prod);
      this.showSnackbar = true;
    },
  },
  created() {
    this.fetchropaHombre();
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
  margin-top: 10px;
}

.product-property {
  margin-bottom: 5px;
}
</style>
  