<template>
  <v-carousel cycle height="400" hide-delimiter-background show-arrows-on-hover>
    <h1 class="text-md-center">Los más vendidos</h1>
    <v-carousel-item
      v-for="mejorproducto in mejoresproductos"
      :key="mejorproducto.title"
      height="200px"
      width="600px"
      class="mx-auto"
      :src="mejorproducto.image"
    >
      <v-row class="fill-height" align="center" justify="center"> </v-row>
    </v-carousel-item>
  </v-carousel>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "carrusel-comp",
  // props: {},
  data: function () {
    return {};
  },
  computed: {
    ...mapState(["mejoresproductos"]),
  },
  methods: {
    ...mapActions(["fetchInfo"]),
  },
  // watch: {},
  // components: {},
  // mixins: [],
  // filters: {},
  // -- Lifecycle Methods
  created() {
    this.fetchInfo();
  },
  // -- End Lifecycle Methods
};
</script>

<style scoped>
</style>