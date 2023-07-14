<template>
  <div>
    <v-app-bar color="deep-orange lighten-1" dark>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>

      <v-toolbar-title class="font-weight-bold">Home DeTodito</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <!-- se agrega disabled para que evitar que se caiga la página cuando el usuario haga click en la misma vista -->
          <v-list-item
            v-for="route in routes"
            :key="route.name"
            @click="redirectTo(route.name)"
            :disabled="currentRoute == route.name"
          >
            <v-list-item-icon>
              <v-icon>{{ route.icon }}</v-icon>
            </v-list-item-icon>
            <v-list-item-title>{{ route.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// import {mapGetters} from 'vuex'
export default {
  name: "nav-bar",
  // props: {},
  data: function () {
    return {
      drawer: false,
      group: null,
      routes: [
        // Acá están los íconos e información de cada vista desde Navbar
        {
          icon: "mdi-home",
          title: "Inicio",
          name: "Home",
        },
        {
          icon: "mdi-human-male",
          title: "Vestuario Hombre",
          name: "Vestuario Hombre",
        },
        {
          icon: "mdi-human-female",
          title: "Vestuario Mujer",
          name: "Vestuario Mujer",
        },
        {
          icon: "mdi-laptop",
          title: "Electrónica",
          name: "Electrónica",
        },
      ],
    };
  },
  computed: {
    currentRoute() {
      return this.$route.name;
    },
  },
  methods: {
    redirectTo(nameRoute) {
      this.$router.push({ name: nameRoute });
    },
  },
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