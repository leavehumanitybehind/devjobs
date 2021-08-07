import Vue from "vue";
import App from "./App.vue";
import Company from "./components/Company.vue";
import Companies from "./components/Companies.vue";
import Error from "./components/404.vue";

import VueRouter from "vue-router";
Vue.use(VueRouter);
Vue.config.productionTip = false;
const routes = [
  {
    path: "/",
    component: {
      render: (h) => h(Companies),
    },
    
  },
  
  {
    name: "company",
    path: "/company/:id",
    props: true,
    component: {
      render: (h) => h(Company),
    },
  },
  {

    path: "/:pathMatch(.*)*",
    props: true,
    component: {
      render: (h) => h(Error),
    },
  },
];
const router = new VueRouter({
  routes, // сокращённая запись для `routes: routes`
});

new Vue({
  router,
  render: (h) => h(App)
  
}).$mount("#app");
