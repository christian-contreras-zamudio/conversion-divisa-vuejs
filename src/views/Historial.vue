<template>
  <div>
    <v-card>
      <v-card-title>
        Historial
        <v-spacer></v-spacer>
        <v-text-field
          v-model="search"
          append-icon="mdi-magnify"
          label="Buscar"
          single-line
          hide-details
        ></v-text-field>
      </v-card-title>
      <v-data-table
        :headers="headers"
        :items="historial"
        :search="search"
        :loading="loading"
        loading-text="Consultando… por favor espere"
        sort-by="createdAt"
        :sort-desc="['createdAt']"
      >
        <template v-slot:item.createdAt="{ item }">
          {{
            item.createdAt | moment("timezone", "America/Mexico_City", "LLLL")
          }}
        </template>
      </v-data-table>
    </v-card>
  </div>
</template>

<script>
import { get } from "axios";
export default {
  data() {
    return {
      loading: false,
      error: false,
      search: "",
      headers: [
        {
          text: "From",
          align: "start",
          value: "fromCurrency"
        },
        { text: "To", value: "toCurrency" },
        { text: "Monto", value: "amount" },
        { text: "Creado", value: "createdAt" }
      ],
      historial: []
    };
  },
  methods: {
    consultar() {
      let vm = this;
      this.loading = true;
      get(`${process.env.VUE_APP_HOST}/api/moneda/historial`)
        .then(function(response) {
          vm.historial = response.data;
          vm.loading = false;
        })
        .catch(function(error) {
          vm.loading = false;
          vm.error = true;
          vm.mensajeError = error.response.data.message;
        });
    }
  },
  created() {
    this.consultar();
  }
};
</script>
