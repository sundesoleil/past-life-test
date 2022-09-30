import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./views/Home";
import Result from "./views/Result";
import PageNotFound from "./views/PageNotFound";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", name: "Home", component: Home },
    { path: "/result", name: "Result", component: Result },
    { path: "/*", name: "PageNotFound", component: PageNotFound },
  ],
});

export default router;
