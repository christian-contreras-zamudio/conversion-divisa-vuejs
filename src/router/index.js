import Vue from "vue";
import VueRouter from "vue-router";
import ConvertirDivisa from "../views/ConvertirDivisa.vue";
import Historial from "../views/Historial.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ConvertirDivisa
  },
  {
    path: "/historial",
    name: "historial",
    component: Historial
  }
];

const router = new VueRouter({
  routes
});

export default router;
