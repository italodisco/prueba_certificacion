<template>
  <v-container>
    <v-row justify="center">
      <v-col md="10">
        <h1 class="text-center indigo--text mb-5">Bolsa de Compras</h1>
        <v-alert
          v-if="cartCount == 0"
          border="left"
          prominent
          shaped
          color="light-green"
          type="info"
        >
          No hay productos agregados al carrito
        </v-alert>
        <!-- v-alert que aparece solo si la cantidad de productos en carro es igual a cero -->

        <v-data-table
          v-else
          :headers="headers"
          :items="cartProducts"
          sort-by="title"
          class="elevation-1"
        >
          <template v-slot:top>
            <v-toolbar flat>
              <v-toolbar-title
                >Total Bolsa de Compras
                <span class="indigo--text"
                  >${{ Number(cartTotal).toLocaleString("en-US") }}</span
                ></v-toolbar-title
              >
              <v-divider class="mx-4" inset vertical></v-divider>
              <v-spacer></v-spacer>

              <v-dialog v-model="dialogDelete" max-width="500px">
                <v-card>
                  <v-card-title class="text-h5"
                    >¿Deseas eliminar este producto?</v-card-title
                  >
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" text @click="closeDelete"
                      >Cancel</v-btn
                    >
                    <v-btn color="blue darken-1" text @click="deleteItemConfirm"
                      >OK</v-btn
                    >
                    <v-spacer></v-spacer>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <template v-slot:[`item.image`]="{ item }">
            <v-img :src="item.image"></v-img>
          </template>
          <template v-slot:[`item.actions`]="{ item }">
            <v-icon small class="mr-2" @click="addStock(item)">
              mdi-plus-circle
            </v-icon>
            <v-icon small class="mr-2" @click="removeStock(item)">
              mdi-minus-circle
            </v-icon>
            <v-icon small @click="deleteItem(item)"> mdi-delete </v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>
  
  <script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "Cart-vue",
  // props: {},
  data: function () {
    return {
      dialogDelete: false,
      headers: [
        {
          text: "ID Producto",
          align: "start",
          sortable: false,
          value: "id",
        },
        { text: "Imagen", value: "image" },
        { text: "Producto", value: "title" },
        { text: "Cantidad", value: "count" },
        { text: "Precio", value: "price" },
        { text: "Subtotal", value: "total" },
        { text: "Acciones", value: "actions", sortable: false },
      ],
      deleteId: null,
    };
  },
  computed: {
    ...mapGetters(["cartProducts", "cartTotal", "cartCount"]),
  },
  methods: {
    ...mapActions([
      "removeCartProduct",
      "addStockCartProduct",
      "removeStockCartProduct",
    ]),

    deleteItem(item) {
      console.log(item);
      this.deleteId = item.id;
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      // ir a store/index.js y crear nueva mutación
      this.removeCartProduct(this.deleteId);
      this.closeDelete();
    },

    closeDelete() {
      this.dialogDelete = false;
    },
    addStock(item) {
      this.addStockCartProduct(item.id);
    },
    removeStock(item) {
      this.removeStockCartProduct(item.id);
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
  