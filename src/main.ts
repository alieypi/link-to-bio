import "@/assets/css/tailwind.css";
import "@/assets/css/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

const app = createApp(App);

app.use(router);

app.mount("#app");
