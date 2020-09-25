<template>
  <div>
    <v-container>
      <v-row class="fill-height" align-content="center" justify="center">
        <v-col class="subtitle-1 text-center" cols="12">
          Espere..<br />
          Consultando {{ from }} a {{ to }}
        </v-col>
        <v-col cols="6">
          <v-progress-linear
            color="deep-purple accent-4"
            indeterminate
            rounded
            height="6"
          ></v-progress-linear>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
export default {
  name: "Loader",
  props: {
    from: String,
    to: String
  },
  data: () => ({
    data: null
  })
};
</script>
