import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

import YzDemoUI from '@/lib/index'

import "./assets/main.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(YzDemoUI)

app.mount("#app");
