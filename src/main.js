/** @format */

import { createApp } from "vue";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import HomePage from "./components/HomePage.vue";
import About from "./components/About.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/home", component: HomePage },
    { path: "/about", component: About },
  ],
});

const app = createApp(App);

app.use(router);
app.mount("#app");
