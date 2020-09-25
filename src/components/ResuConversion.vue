<template>
  <v-col cols="12" xs="12" sm="6" md="6" lg="4" xl="4" v-if="mostrar">
    <Loader v-show="loader" v-if="loader" :from="from" :to="to" />
    <transition name="slide-fade">
      <v-card class="" color="#26c6da" dark v-show="!loader" v-if="data">
        <v-card-title v-if="data">
          <v-icon large left>
            mdi-cash
          </v-icon>
          <span class="title font-weight-light">
            {{ data.from }} a {{ data.to }}
          </span>
        </v-card-title>

        <v-card-text v-if="data" class="headline font-weight-bold">
          {{ data.tipo_cambio }}
        </v-card-text>
        <!-- Descomentar para agregar un monto y convertir a la divisa seleccionada -->
        <!-- <v-card-actions v-if="data">
          <v-list-item class="grow">
            <v-list-item-avatar color="grey darken-3">
              <v-icon>mdi-currency-sign</v-icon>
            </v-list-item-avatar>

            <v-list-item-content>
              <v-list-item-title>{{ data.tipo_cambio }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card-actions> -->
      </v-card>
      <v-alert v-if="error" prominent type="error">
        <v-row align="center">
          <v-col class="grow">
            {{ mensajeError }}
          </v-col>
        </v-row>
      </v-alert>
    </transition>
  </v-col>
</template>
<script>
import { post } from "axios";
import Loader from "@/components/Loader.vue";
export default {
  name: "ResuConversion",
  components: { Loader },
  props: {
    from: String,
    to: String,
    monto: Number
  },
  data: () => ({
    data: null,
    loader: true,
    error: false,
    mostrar: true,
    mensajeError: ""
  }),
  methods: {
    convertir() {
      let vm = this;
      post(`${process.env.VUE_APP_HOST}/api/moneda/convertir`, {
        from: this.from,
        to: this.to,
        monto: this.monto
      })
        .then(function(response) {
          vm.data = response.data;
          vm.loader = false;
        })
        .catch(function(error) {
          vm.loader = false;
          vm.error = true;
          vm.mensajeError = error.response.data.message;
          setTimeout(() => {
            vm.error = false;
            vm.mostrar = false;
          }, 5000);
        });
    }
  },
  mounted() {
    this.convertir();
  }
};
</script>
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
