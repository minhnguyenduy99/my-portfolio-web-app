import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import { servicePlugin, loadDataSource } from "./services";

loadDataSource(process.env.VUE_APP_PROFILE_URL).then(() => {
  const app = createApp(App);

  app.use(servicePlugin);

  app.use(router).mount("#app");
});
