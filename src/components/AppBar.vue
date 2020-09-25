<template>
  <div>
    <v-app-bar app color="primary">
      <v-app-bar-nav-icon @click.stop="menu_izquierdo"></v-app-bar-nav-icon>

      <div class="d-flex align-center">
        Convertidor
      </div>
      <v-spacer></v-spacer>
    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer1"
      :mini-variant="mini"
      fixed
      dark
      right-to-left
      left-to-right
      temporary
      class="menu"
      overlay-color="indigo lighten-2"
    >
      <v-list-item class="px-2">
        <v-list-item-title></v-list-item-title>
      </v-list-item>

      <v-list class="pt-0" dense>
        <v-divider light></v-divider>

        <v-list-item
          v-for="item in items"
          :key="item.title"
          router
          :to="item.link"
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      drawer1: null,
      items: [
        { title: "Convertir", icon: "mdi-home", link: "/" },
        {
          title: "Historial",
          icon: "mdi-history",
          link: "/historial"
        }
      ],
      mini: false,
      right: null,
      dialog: false
    };
  },
  methods: {
    menu_izquierdo() {
      var valor = !this.drawer1;
      this.drawer1 = valor;
    }
  }
};
</script>
