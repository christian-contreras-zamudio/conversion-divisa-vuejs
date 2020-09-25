<template>
  <div class="home">
    <v-row>
      <v-col class="mx-auto" cols="12" xs="12" sm="12" md="10" lg="8" xl="8">
        <FormDivisas />
      </v-col>
    </v-row>
  </div>
</template>

<script>
// @ is an alias to /src
import FormDivisas from "@/components/FormDivisas.vue";

export default {
  name: "Home",
  components: {
    FormDivisas
  }
};
</script>
