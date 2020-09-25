<template>
  <div>
    <ul>
      <li>Seleccione una divisa</li>
      <li>Cambie el monto a convertir</li>
    </ul>
    <v-form ref="form" v-model="valid" lazy-validation>
      <v-row>
        <v-col cols="12" md="12">
          <v-select
            v-model="select"
            :items="divisas"
            :rules="divisaRules"
            label="Divisa"
            required
          ></v-select>
        </v-col>
        <v-col cols="12" md="12">
          <v-text-field
            v-model="monto"
            :rules="montoRules"
            label="Monto"
            required
          ></v-text-field>
        </v-col>
        <v-col cols="12" md="12">
          <div class="text-right">
            <v-btn color="blue" class="mr-4" @click="submit">
              <v-icon left>mdi-cash-multiple</v-icon>Convertir
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-form>
  </div>
</template>

<script>
export default {
  name: "FormDivisas",

  data: () => ({
    valid: false,
    monto: 1,
    montoRules: [
      v => !!v || "Monto es requerido",
      v => (v && v != 0) || "Monto no debe ser cero"
    ],
    divisaRules: [v => !!v || "Seleccione una divisa"],
    select: null,
    divisas: ["USD", "PLN"]
  }),
  methods: {
    async submit() {
      await this.$refs.form.validate();
      if (this.valid) {
        console.log("form valido");
      }
    }
  }
};
</script>
