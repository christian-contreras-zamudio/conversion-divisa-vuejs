<template>
  <v-app>
    <AppBar />
    <v-main>
      <v-container grid-list-xl>
        <keep-alive :include="['Home']">
          <router-view />
        </keep-alive>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import AppBar from "./components/AppBar";

export default {
  name: "App",

  components: {
    AppBar
  },

  data: () => ({
    //
  }),
  created() {
    this.$vuetify.theme.dark = true;
  }
};
</script>
