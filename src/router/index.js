import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Share from "../views/Share.vue";
import Clean from "../views/Clean.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      title: 'Cleaner'
    }
  },
  {
    path: "/share",
    name: "Reviews",
    component: Share,
    meta: {
      title: 'Testimonials'
    }
  },
  {
    path: "/clean",
    name: "Clean",
    component: Clean,
    meta: {
      title: 'Cleaner'
    }
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
