<template>
  <v-container>
    <h1 class="display-2 text-center mb-4 indigo--text font-weight-bold">
      En DeTodito está todo lo que necesito
    </h1>
    <v-divider></v-divider>
    <carrusel></carrusel>
    <CardHome></CardHome>
  </v-container>
</template>
  
  <script>
import Carrusel from "@/components/Carrusel.vue";
import CardHome from "@/components/CardHome.vue";
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
    CardHome,
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