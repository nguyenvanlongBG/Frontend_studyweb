import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import CoreuiVue from "@coreui/vue";
// import VueMathjax from 'vue-mathjax-next';
// import * as MathLive from "mathlive";
const app = createApp(App);
// app.use(MathLive);
app.use(CoreuiVue);
app.use(router);
// app.use(VueMathjax);
app.mount("#app");

