<template>
  <v-container>
    <v-divider></v-divider>
    <br />
    <h1 class="text-md-center">Galería de productos</h1>
    <br />
    <v-row justify="space-around">
      <v-col
        cols="12"
        sm="6"
        md="3"
        v-for="tipoproducto in tiposproductos"
        :key="tipoproducto.name"
      >
        <v-card class="mx-auto" max-width="400" height="700">
          <v-img
            class="white--text align-end"
            height="450px"
            :src="tipoproducto.image"
          >
          </v-img>
          <v-card-text class="text--primary">
            <h2>{{ tipoproducto.name }}</h2>
            <br />
            <div>{{ tipoproducto.text }}</div>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "card-comp",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["tiposproductos"]),
  },
  //methods: {}
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>