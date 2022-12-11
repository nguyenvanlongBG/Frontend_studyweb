import {createApp} from "vue";
import App from "./App.vue";
import router from "./router";
import CoreuiVue from "@coreui/vue";
import CKEditor from '@ckeditor/ckeditor5-vue';

const app = createApp(App);
app.use(CoreuiVue);
app.use(router);
app.use(CKEditor);
app.mount("#app");
