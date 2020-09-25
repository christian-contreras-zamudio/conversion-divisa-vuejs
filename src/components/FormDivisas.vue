<template>
  <div>
    <v-card color="#3949AB" dark>
      <v-card-title class="headline">Convertir divisa</v-card-title>

      <v-card-subtitle>
        <ul>
          <li>Seleccione una divisa</li>
          <!-- <li>Cambie el monto a convertir</li> -->
          <li>Se convertirá a <b>MXN, ERN, DZD, CDF, MAD, SYP</b></li>
        </ul>
      </v-card-subtitle>
      <v-container grid-list-xl>
        <v-form ref="form" v-model="valid">
          <v-row>
            <v-col cols="12" xs="12" sm="6" md="6">
              <v-select
                v-model="select"
                :items="divisas"
                :rules="divisaRules"
                label="Divisa"
                required
              ></v-select>
            </v-col>
            <!-- <v-col cols="12" xs="12" sm="6" md="6">
              <v-text-field
                v-model="monto"
                :rules="montoRules"
                label="Monto"
                required
                type="number"
              ></v-text-field>
            </v-col> -->
            <v-col cols="12" xs="12" sm="6" md="6">
              <div class="text-right">
                <v-btn
                  color="green darken-1"
                  class="mr-4 mt-3"
                  @click="submit"
                  :disabled="!valid"
                >
                  <v-icon left>mdi-cash-multiple</v-icon>Convertir
                </v-btn>
              </div>
            </v-col>
          </v-row>
        </v-form>
      </v-container>
    </v-card>

    <div v-if="empezarConversion" class="mt-2">
      <v-row>
        <ResuConversion
          v-for="divisa in divisasAconvertir"
          :from="select"
          :to="divisa"
          :monto="monto"
          :key="divisa"
        />
      </v-row>
    </div>
  </div>
</template>

<script>
import ResuConversion from "@/components/ResuConversion.vue";
export default {
  name: "FormDivisas",
  components: { ResuConversion },
  data: () => ({
    valid: false,
    monto: 1,
    montoRules: [
      v => !!v || "Monto es requerido",
      v => (v && v != 0) || "Monto no debe ser cero"
    ],
    divisaRules: [v => !!v || "Seleccione una divisa"],
    select: null,
    divisas: ["USD", "PLN"],
    divisasAconvertir: ["MXN", "ERN", "DZD", "CDF", "MAD", "SYP"],
    empezarConversion: false
  }),
  methods: {
    async submit() {
      this.empezarConversion = false;
      await this.$refs.form.validate();

      if (this.valid) {
        console.log("form valido");
        this.empezarConversion = true;
      }
    }
  }
};
</script>
