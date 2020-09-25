import Vue from "vue";
import VueRouter from "vue-router";
import ConvertirDivisa from "../views/ConvertirDivisa.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: ConvertirDivisa
  }
];

const router = new VueRouter({
  routes
});

export default router;
